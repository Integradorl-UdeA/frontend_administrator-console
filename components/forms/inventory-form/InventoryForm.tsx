import React from 'react';

interface InventoryFormProps {
	closeModal: () => void;
}
const InventoryForm = ({ closeModal }: InventoryFormProps) => {
	return (
		<div>
			<button onClick={closeModal}>Cerrar</button>
		</div>
	);
};

export default InventoryForm;
