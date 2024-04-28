import React, { useState } from 'react';
import FieldFormButtons from './FieldFormButtons';
import type { IListAttr } from '@/types/categoryTypes';
import { useCategoryForm } from '@/store/categoryFormStore';
import FormError from '../../errors-logs/FormError';

interface Props {
	type: 0 | 1;
	attr?: null | string | IListAttr;
}
const TextFieldForm = ({ type, attr }: Props) => {
	const isEditing = () => type === 1;
	const [attribute, setAttribute] = useState<string>(
		isEditing() ? (attr as string) : '',
	);
	const addTextAttribute = useCategoryForm((state) => state.addAttribute);
	const editTextAttribute = useCategoryForm((state) => state.editTextAttribute);
	const setFormFieldStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);
	const isValidSameNameAttr = useCategoryForm(
		(state) => state.isValidSameNameAttr,
	);
	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string>('');

	const isValidForm = () => {
		if (!isValidSameNameAttr(attribute)) {
			setErrorMsg(`Ya existe un campo llamado "${attribute}"`);
			return false;
		}
		if (attribute === '') {
			setErrorMsg(`No puede dejar campos vacíos`);
			return false;
		}
		return true;
	};

	const handleSubmit = () => {
		if (!isValidForm()) {
			setError(true);
			return;
		}
		type === 0 ? addTextAttribute(attribute) : editTextAttribute(attribute);
		setFormFieldStatus(0);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(error) setError(false)
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
			<div className='w-full flex items-center justify-center my-5'>
				{error && <FormError msg={errorMsg} />}
			</div>
			<FieldFormButtons
				handleCreateField={() => {
					handleSubmit();
				}}
			/>
		</>
	);
};

export default TextFieldForm;
