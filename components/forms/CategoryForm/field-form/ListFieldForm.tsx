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
		? { name: (listAttr as IListAttr).name, list: (listAttr as IListAttr).list }
		: { name: '', list: [] };

	const [listAttribute, setListAttribute] = useState<IListAttr>(defaultValue);

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
		console.log('isValidForm');
		if (!isValidSameNameAttr(listAttribute.name)) {
			console.log('pasó por acá');
			setErrorMsg(`Ya existe un campo llamado "${listAttribute.name}"`);
			return false;
		}
		if (listAttribute.name === '' || listAttribute.list.length === 0) {
			console.log('PAsó por vacío');
			setErrorMsg(`No puede dejar campos vacíos`);
			return false;
		}
		return true;
	};

	const handleSubmit = () => {
		console.log('handleSubmit');
		if (!isValidForm()) {
			console.log('Pasó por acá');
			setError(true);
			return;
		}
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

	const listArrayToString = (list: string[]) => list.join(', ');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if(error) setError(false)
		let { name, value }: { name: string; value: string | string[] } = e.target;

		if (name === 'list') value = listStringToArray(value);
		setListAttribute({
			...listAttribute,
			[name]: value,
		});
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
						value={listAttribute.name}
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
						value={listArrayToString(listAttribute.list)}
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
