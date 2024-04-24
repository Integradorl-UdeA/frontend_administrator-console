import React from 'react';
import { useCategoryForm } from '@/store/categoryFormStore';
import CreateTextField from './CreateTextField';
import CreateListField from './CreateListField';

const CreateFieldForm = () => {
	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const setFieldFormStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);

	return (
		<>
			{fieldFormStatus === 0 && (
				<div className='flex my-2'>
					<button
						className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-r-none bg-green-600 text-white font-bold'
						type='button'
						onClick={() => {
							setFieldFormStatus(1);
						}}
					>
						Crear nuevo campo de texto
					</button>
					<button
						className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-l-none bg-white text-green-600 font-bold'
						type='button'
						onClick={() => {
							setFieldFormStatus(2);
						}}
					>
						Crear nuevo campo de lista
					</button>
				</div>
			)}
			<div className='bg-slate-300 rounded-lg'>
				{fieldFormStatus === 1 && <CreateTextField />}
				{fieldFormStatus === 2 && <CreateListField />}
			</div>
		</>
	);
};

export default CreateFieldForm;
