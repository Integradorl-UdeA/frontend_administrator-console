import React from 'react';
import CategorySelection from './CategorySelection';
import { useInventoryForm } from '@/store/inventoryFormStore';
import InventoryItemFields from './InventoryItemFields';

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
					<button onClick={closeModal}>Cerrar</button>
					<button
						onClick={() => {
							setFormState(1);
						}}
					>
						Siguiente
					</button>
				</>
			)}

			{formState === 1 && (
				<>
					<InventoryItemFields />
					<button
						onClick={() => {
							setFormState(0);
						}}
					>
						Volver
					</button>
					<button onClick={handleCreateElement}>Crear elemento</button>
				</>
			)}
		</>
	);
};

export default InventoryForm;
