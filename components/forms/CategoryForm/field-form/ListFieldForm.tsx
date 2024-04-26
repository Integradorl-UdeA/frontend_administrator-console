import React, { useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import type { IListAttr } from '@/types/categoryTypes';
import FieldFormButtons from './FieldFormButtons';
import { useCategoryForm } from '@/store/categoryFormStore';

interface Props {
	type: 0 | 1;
	listAttr?: null | string | IListAttr;
}
const ListFieldForm = ({ type, listAttr}: Props) => {
	const isEditing = () => type === 1;
	const defaultValue = isEditing()
		? { name: (listAttr as IListAttr).name, list: (listAttr as IListAttr).list }
		: { name: '', list: [] };

	const [listAttribute, setListAttribute] = useState<IListAttr>(defaultValue);

	const addListAttribute = useCategoryForm((state) => state.addListAttribute);
	const editListAttribute = useCategoryForm((state) => state.editListAttribute);
	const setFormFieldStatus = useCategoryForm((state) => state.setFormFieldStatus);
	const isValidSameNameAttr = useCategoryForm((state) => state.isValidSameNameAttr);

	const handleSubmit = () => {
		if(!isValidSameNameAttr(listAttribute.name)){
			return 
		}
		type === 0 ? addListAttribute(listAttribute) : editListAttribute(listAttribute)
		setFormFieldStatus(0)
	}

	const listStringToArray = (list: string) =>
		list
			.trim()
			.replace(/\s*,\s*/g, ',')
			.split(',');

	const listArrayToString = (list: string[]) => list.join(', ');

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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
						Escriba los valores que puede tomar el campo (Separados con
						coma)
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
				<FieldFormButtons
					handleCreateField={() => {
						isValidSameNameAttr(listAttribute.name) && handleSubmit();
					}}
				/>
			</div>
		</>
	);
};

export default ListFieldForm;
