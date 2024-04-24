import { useCategoryForm } from '@/store/categoryFormStore';
import React from 'react';
import { FaPlus } from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';

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
				className='py-1 px-3 bg-red-600 text-white font-semibold rounded-xl mx-3 flex items-center justify-center'
				onClick={() => {
					setFieldFormStatus(0);
				}}
			>
				<IoClose className='text-xl mr-2 text-red-600 bg-white rounded-full p-1' />
				Cancelar
			</button>
			<button
				className='flex items-center justify-center py-1 px-3 bg-greenThree text-white font-semibold rounded-xl mx-3'
				type='button'
				onClick={handleCreateField}
			>
				Agregar
				<FaPlus className='text-xl ml-2 text-greenThree bg-white rounded-full p-1' />
			</button>
		</div>
	);
};

export default CreateFieldButtons;
