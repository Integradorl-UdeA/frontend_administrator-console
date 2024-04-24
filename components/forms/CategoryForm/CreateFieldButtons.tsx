import { useCategoryForm } from '@/store/categoryFormStore';
import React from 'react';

interface Props {
	handleCreateField: () => void;
}
const CreateFieldButtons = ({ handleCreateField }: Props) => {
	const setFieldFormStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);

	return (
		<div className='flex justify-between mt-4'>
			<button
				className='py-1 px-3 bg-red-600 text-white font-semibold rounded-xl mx-3'
				onClick={() => {
					setFieldFormStatus(0);
				}}
			>
				Cancelar
			</button>
			<button
				className='py-1 px-3 bg-green-600 text-white font-semibold rounded-xl mx-3'
				type='button'
				onClick={handleCreateField}
			>
				Crear
			</button>
		</div>
	);
};

export default CreateFieldButtons;
