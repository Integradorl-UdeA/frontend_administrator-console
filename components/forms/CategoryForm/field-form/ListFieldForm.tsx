import React, { useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import type { IListAttr } from '@/types/categoryTypes';
import FieldFormButtons from './FieldFormButtons';
import { useCategoryForm } from '@/store/categoryFormStore';
import FormError from '../../errors-logs/FormError';

interface Props {
	type: 0 | 1;
	listAttr?: null | string | IListAttr;
}
const ListFieldForm = ({ type, listAttr }: Props) => {
	const isEditing = () => type === 1;
	const defaultValue = isEditing()
		? {
				name: (listAttr as IListAttr).name,
				list: (listAttr as IListAttr).list.join(', '),
		  }
		: { name: '', list: '' };

	const [listAttributeForm, setListAttributeForm] = useState<{
		name: string;
		list: string;
	}>(defaultValue);

	const addListAttribute = useCategoryForm((state) => state.addListAttribute);
	const editListAttribute = useCategoryForm((state) => state.editListAttribute);
	const setFormFieldStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);
	const isValidSameNameAttr = useCategoryForm(
		(state) => state.isValidSameNameAttr,
	);

	const [error, setError] = useState(false);
	const [errorMsg, setErrorMsg] = useState<string>('');

	const isValidForm = () => {
		if(!isEditing()){	
			if (!isValidSameNameAttr(listAttributeForm.name)) {
				setErrorMsg(`Ya existe un campo llamado "${listAttributeForm.name}"`);
				return false;
			}
		}
		if (listAttributeForm.name === '' || listAttributeForm.list === '') {
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
		const listAttribute = {
			name: listAttributeForm.name,
			list: listStringToArray(listAttributeForm.list),
		};
		type === 0
			? addListAttribute(listAttribute)
			: editListAttribute(listAttribute);
		setFormFieldStatus(0);
	};

	const listStringToArray = (list: string) =>
		list
			.trim()
			.replace(/\s*,\s*/g, ',')
			.split(',');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (error) setError(false);
		const { name, value } = e.target;

		setListAttributeForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	return (
		<>
			<h3 className='font-semibold mb-4'>
				{isEditing() ? 'Editar campo de lista:' : 'Crear campo de lista:'}{' '}
			</h3>
			<div className='flex flex-col'>
				<div className='flex items-center'>
					<label className='my-2 flex-grow-0 mr-4' htmlFor=''>
						Nombre del campo:
					</label>
					<input
						className='flex-grow rounded-lg py-1 px-3 outline-greenThree'
						type='text'
						placeholder='Nuevo campo'
						name='name'
						value={listAttributeForm.name}
						onChange={handleChange}
					/>
				</div>
				<div className={styForm.fieldFormListSection}>
					<label className='my-2' htmlFor=''>
						Escriba los valores que puede tomar el campo (Separados con coma)
					</label>
					<input
						className='flex-grow rounded-lg py-1 px-3 outline-greenThree'
						type='text'
						placeholder='Ej: Manzana, Narnaja, Mandarina ...'
						name='list'
						value={listAttributeForm.list}
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
			</div>
		</>
	);
};

export default ListFieldForm;
