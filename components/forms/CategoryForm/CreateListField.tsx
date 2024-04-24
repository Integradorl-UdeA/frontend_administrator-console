import React, { useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import type { IListAttr } from '@/types/categoryTypes';
import { useCategoryForm } from '@/store/categoryFormStore';
import CreateFieldButtons from './CreateFieldButtons';

const CreateListField = () => {
	const [listAttribute, setListAttribute] = useState<IListAttr>({
		name: '',
		list: [],
	});
	const addListAttribute = useCategoryForm((state) => state.addListAttribute);
	const setFieldFormStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value }: { name: string; value: string | string[] } = e.target;
		if (name === 'list')
			value = value
				.trim()
				.replace(/\s*,\s*/g, ',')
				.split(',');
		setListAttribute({
			...listAttribute,
			[name]: value,
		});
	};

	const handleCreateField = () => {
		addListAttribute(listAttribute);
		setFieldFormStatus(0);
	};
	return (
		<div className='flex flex-col'>
			<div className={styForm.fieldFormListSection}>
				<label className='my-2' htmlFor=''>
					Ingrese el nombre del nuevo campo
				</label>
				<input
					type='text'
					placeholder='Nuevo campo'
					name='name'
					onChange={handleChange}
				/>
			</div>
			<div className={styForm.fieldFormListSection}>
				<label className='my-2' htmlFor=''>
					Escriba los valores que puede tomar el nuevo campo (Separados con
					coma)
				</label>
				<input
					type='text'
					placeholder='Ej: Manzana, Narnaja, Mandarina ...'
					name='list'
					onChange={handleChange}
				/>
			</div>
			<CreateFieldButtons handleCreateField={handleCreateField} />
		</div>
	);
};

export default CreateListField;
