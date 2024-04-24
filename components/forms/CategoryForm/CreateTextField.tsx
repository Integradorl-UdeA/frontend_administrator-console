import React, { useState } from 'react';
import CreateFieldButtons from './CreateFieldButtons';
import { useCategoryForm } from '@/store/categoryFormStore';

const CreateTextField = () => {
	const [attribute, setAttribute] = useState<string>('');
	const setFormFieldStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);
	const addAttribute = useCategoryForm((state) => state.addAttribute);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setAttribute(value);
	};

	const handleCreateField = () => {
		addAttribute(attribute);
		setFormFieldStatus(0);
	};

	return (
		<>
			<h3 className="font-semibold mb-4">Crear campo de texto: </h3>
			<div className='flex items-center'>
				<label htmlFor='' className='flex-grow-0 mr-5'>
					Ingrese el nombre:
				</label>
				<input
					className='flex-grow py-1 px-3 rounded-lg outline-greenThree'
					type='text'
					placeholder='Nuevo campo'
					name='attribute'
					onChange={handleChange}
				/>
			</div>
			<CreateFieldButtons handleCreateField={handleCreateField} />
		</>
	);
};

export default CreateTextField;
