import React, { useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import type { IListAttr } from '@/types/categoryTypes';
import CreateFieldButtons from './CreateFieldButtons';

interface Props {
	type: 0 | 1;
	listAttr?: null | string | IListAttr;
	handleSubmit: (listAttr: IListAttr) => void;
}
const ListFieldForm = ({ type, listAttr, handleSubmit }: Props) => {
	const isEditing = () => type === 1;
	const defaultValue = isEditing()
		? { name: (listAttr as IListAttr).name, list: (listAttr as IListAttr).list }
		: { name: '', list: [] };

	const [listAttribute, setListAttribute] = useState<IListAttr>(defaultValue);

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
				<CreateFieldButtons
					handleCreateField={() => {
						handleSubmit(listAttribute);
					}}
				/>
			</div>
		</>
	);
};

export default ListFieldForm;
