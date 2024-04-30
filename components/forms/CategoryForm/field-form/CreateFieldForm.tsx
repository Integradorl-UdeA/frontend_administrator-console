import React from 'react';
import { useCategoryForm } from '@/store/categoryFormStore';
import { FaPlus } from 'react-icons/fa6';
import TextFieldForm from './TextFieldForm';
import ListFieldForm from './ListFieldForm';

const CreateFieldForm = () => {
	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const setFormFieldStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);

	const editingAttribute = useCategoryForm((state) => state.editingAttribute);
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
								setFormFieldStatus(1);
							}}
						>
							<FaPlus className='mr-2' />
							Campo de texto
						</button>
						<button
							className='flex items-center justify-center px-3 py-1 mx-3 text-white font-medium rounded-xl bg-greenThree'
							type='button'
							onClick={() => {
								setFormFieldStatus(2);
							}}
						>
							<FaPlus className='mr-2' />
							Campo de Lista
						</button>
					</div>
				</>
			)}
			{fieldFormStatus === 1 && (
				<TextFieldForm type={0}/>
			)}
			{fieldFormStatus === 2 && (
				<ListFieldForm type={0}/>
			)}
			{fieldFormStatus === 3 && (
				<TextFieldForm type={1} attr={editingAttribute} />
			)}
			{fieldFormStatus === 4 && (
				<ListFieldForm type={1} listAttr={editingAttribute}/>
			)}
		</>
	);
};

export default CreateFieldForm;
