import React from 'react';
import { useCategoryForm } from '@/store/categoryFormStore';
import CreateTextField from './CreateTextField';
import CreateListField from './CreateListField';
import { FaPlus } from 'react-icons/fa6';

const CreateFieldForm = () => {
	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const setFieldFormStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);

	return (
		<>
			{fieldFormStatus === 0 && (
				<>
					<p className='text-lg font-semibold'>Crear campos adicionales: </p>
					<div className='flex my-2 justify-center'>
						<button
							className='flex items-center justify-center px-3 py-1 mx-3 text-white font-medium rounded-xl bg-greenThree'
							type='button'
							onClick={() => {
								setFieldFormStatus(1);
							}}
						>
							<FaPlus className='mr-2' />
							Campo de texto
						</button>
						<button
							className='flex items-center justify-center px-3 py-1 mx-3 text-white font-medium rounded-xl bg-greenThree'
							type='button'
							onClick={() => {
								setFieldFormStatus(2);
							}}
						>
							<FaPlus className='mr-2' />
							Campo de Lista
						</button>
					</div>
				</>
			)}
				{fieldFormStatus === 1 && <CreateTextField />}
				{fieldFormStatus === 2 && <CreateListField />}
		</>
	);
};

export default CreateFieldForm;
