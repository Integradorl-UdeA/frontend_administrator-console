import React from 'react';
import { useCategoryForm } from '@/store/categoryFormStore';
import { FaPlus } from 'react-icons/fa6';
import TextFieldForm from './TextFieldForm';
import type { IListAttr } from '@/types/categoryTypes';
import ListFieldForm from './ListFieldForm';

const CreateFieldForm = () => {
	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const setFormFieldStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);
	const addAttribute = useCategoryForm((state) => state.addAttribute);

	const handleCreateTextField = (attr: string) => {
		addAttribute(attr);
		setFormFieldStatus(0);
	};

	const addListAttribute = useCategoryForm((state) => state.addListAttribute);

	const handleCreateListField = (listAttr: IListAttr) => {
		addListAttribute(listAttr);
		setFormFieldStatus(0);
	};

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
				<TextFieldForm type={0} handleSubmit={handleCreateTextField} />
			)}
			{fieldFormStatus === 2 && (
				<ListFieldForm type={0} handleSubmit={handleCreateListField} />
			)}
		</>
	);
};

export default CreateFieldForm;
