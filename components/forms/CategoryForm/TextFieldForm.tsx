import React, { useState } from 'react';
import CreateFieldButtons from './CreateFieldButtons';
import type { IListAttr } from '@/types/categoryTypes';

interface Props {
	type: 0 | 1;
	attr?: null | string | IListAttr;
	handleSubmit: (attr: string) => void;
}
const TextFieldForm = ({ type, attr, handleSubmit }: Props) => {
	const isEditing = () => type === 1;
	const [attribute, setAttribute] = useState<string>(
		isEditing() ? (attr as string) : '',
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setAttribute(value);
	};

	return (
		<>
			<h3 className='font-semibold mb-4'>
				{isEditing() ? 'Editar campo de texto' : 'Crear campo de texto: '}{' '}
			</h3>
			<div className='flex items-center'>
				<label htmlFor='' className='flex-grow-0 mr-5'>
					{isEditing() ? 'Edite el nombre: ' : 'Ingrese el nombre:'}
				</label>
				<input
					className='flex-grow py-1 px-3 rounded-lg outline-greenThree'
					type='text'
					placeholder='Nuevo campo'
					name='attribute'
					value={attribute}
					onChange={handleChange}
				/>
			</div>
			<CreateFieldButtons
				handleCreateField={() => {
					handleSubmit(attribute);
				}}
			/>
		</>
	);
};

export default TextFieldForm;
