import React, { useEffect, useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import type { IListAttr } from '@/types/categoryTypes';
import { useController, type Control, type FieldValues } from 'react-hook-form';
import { useCategoryForm } from '@/store/categoryFormStore';

interface Props {
	control: Control<FieldValues, any>;
}

const CreateFieldForm = ({ control }: Props) => {
	const [attribute, setAttribute] = useState<string>('');
	const [listAttribute, setListAttribute] = useState<IListAttr>({
		name: '',
		list: [],
	});
	
	const { field: attributesField } = useController({
		name: 'attributes',
		control,
	});
	const { field: listAttributeField } = useController({
		name: 'listAttributes',
		control,
	});

	const handleAttrChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setAttribute(value);
	};
	const handleAttrListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const setFieldFormStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);

	const changeFieldFormState = (state: 0 | 1 | 2) => {
		setFieldFormStatus(state);
	};

	const addAttribute = useCategoryForm((state) => state.addAttribute);
	const addListAttribute = useCategoryForm((state) => state.addListAttribute);

	const handleCreateField = () => {
		if (fieldFormStatus === 1) {
			addAttribute(attribute);
		}
		if (fieldFormStatus === 2) {
			addListAttribute(listAttribute);
		}
		changeFieldFormState(0);
	};

	useEffect(() => {
		attributesField.onChange(additionalAttr.attributes);
		listAttributeField.onChange(additionalAttr.listAttributes);
	}, [additionalAttr]);

	const formFieldText = (
		<div className={styForm.formSectionCol}>
			<label htmlFor='' className='block w-full mb-3'>
				Ingrese el nombre del nuevo campo:
			</label>
			<input
				className='block w-full'
				type='text'
				placeholder='Nuevo campo'
				name='attribute'
				onChange={handleAttrChange}
			/>
		</div>
	);

	const formFieldList = (
		<div className='flex flex-col'>
			<div className={styForm.fieldFormListSection}>
				<label className='my-2' htmlFor=''>
					Ingrese el nombre del nuevo campo
				</label>
				<input
					type='text'
					placeholder='Nuevo campo'
					name='name'
					onChange={handleAttrListChange}
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
					onChange={handleAttrListChange}
				/>
			</div>
		</div>
	);

	return (
		<>
			{fieldFormStatus === 0 && (
				<div className='flex my-2'>
					<button
						className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-r-none bg-green-600 text-white font-bold'
						type='button'
						onClick={() => {
							changeFieldFormState(1);
						}}
					>
						Crear nuevo campo de texto
					</button>
					<button
						className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-l-none bg-white text-green-600 font-bold'
						type='button'
						onClick={() => {
							changeFieldFormState(2);
						}}
					>
						Crear nuevo campo de lista
					</button>
				</div>
			)}
			<div className='bg-slate-300 rounded-lg'>
				{fieldFormStatus === 1 && formFieldText}
				{fieldFormStatus === 2 && formFieldList}
				{fieldFormStatus !== 0 && (
					<div className='flex justify-between mt-4'>
						<button
							className='py-1 px-3 bg-red-600 text-white font-semibold rounded-xl mx-3'
							onClick={() => {
								setFieldFormStatus(0);
							}}
						>
							Cancelar
						</button>
						<button
							className='py-1 px-3 bg-green-600 text-white font-semibold rounded-xl mx-3'
							type='button'
							onClick={handleCreateField}
						>
							Crear
						</button>
					</div>
				)}
			</div>
		</>
	);
};

export default CreateFieldForm;
