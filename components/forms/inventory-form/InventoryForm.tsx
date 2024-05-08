import React from 'react';
import CategorySelection from './CategorySelection';
import { useInventoryForm } from '@/store/inventoryFormStore';
import InventoryItemFields from './InventoryItemFields';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from "react-icons/io";



interface InventoryFormProps {
	closeModal: () => void;
}
const InventoryForm = ({ closeModal }: InventoryFormProps) => {
	const setFormState = useInventoryForm((state) => state.setFormState);
	const formState = useInventoryForm((state) => state.formState);

	const handleCreateElement = () => {
		console.log('Crear elemento');
		closeModal();
	};

	return (
		<>
			{formState === 0 && (
				<>
					<CategorySelection />
					<div className=' flex justify-between mt-8'>
						<button
							className=' flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100'
							type='button'
							onClick={() => {
								closeModal != null && closeModal();
							}}
						>
							<AiOutlineClose className='text-white bg-red-500 rounded-full p-1 mr-2 text-2xl' />
							Cancelar
						</button>
						<button
							className=' flex items-center justify-center bg-white py-2 px-3 rounded-full font-medium shadow-lg hover:bg-greenThree/10'
							type='button'
							onClick={() => {
								setFormState(1);
							}}
						>
							<IoMdArrowRoundForward className='text-white bg-greenThree rounded-full p-1 mr-2 text-2xl' />
							Siguiente
						</button>
					</div>
				</>
			)}

			{formState === 1 && (
				<>
					<InventoryItemFields />
					<div className=' flex justify-between mt-8'>
						<button
							className=' flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100'
							type='button'
							onClick={() => {
								setFormState(0);
							}}
						>
							
							<IoMdArrowRoundBack className='text-white bg-red-500 rounded-full p-1 mr-2 text-2xl' />
							Volver
						</button>
						<button
							onClick={() => {
								handleCreateElement();
							}}
							className=' flex items-center justify-center bg-white py-2 px-3 rounded-full font-medium shadow-lg hover:bg-greenThree/10'
							type='submit'
						>
							<FaPlus className='text-white bg-greenThree rounded-full p-1 mr-2 text-2xl' />
							Crear Item
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default InventoryForm;
