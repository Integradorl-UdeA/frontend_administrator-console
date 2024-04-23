import React, { useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import type { IAdditionalAttr, IListAttr } from '@/types/categoryTypes';

interface Props {
	additionalAttr: IAdditionalAttr 
	setAdditionalAttr: React.Dispatch<React.SetStateAction<IAdditionalAttr>>;
}

const CreateFieldForm = ({additionalAttr, setAdditionalAttr}: Props) => {

	
	const [attribute, setAttribute] = useState<string>("")
	const [listAttribute, setListAttribute] = useState<IListAttr>({name: '', list: []})


	const handleAttrChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
		const { value } = e.target
		setAttribute(value)
	}
	const handleAttrListChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let {name, value}: { name: string; value: string | string[] } = e.target
		if (name === 'list')
					value = value
						.trim()
						.replace(/\s*,\s*/g, ',')
						.split(',');
		setListAttribute({
			...listAttribute,
			[name]: value
		})

	}
	const [fieldFormState, setFieldFormState] = useState<0 | 1 | 2>(0);

	const changeFieldFormState = (state: 0 | 1 | 2) => {
		setFieldFormState(state);
	};

	// const {field: attributesField} = useController({name: 'attributes'})
	// const {field: listAttributesField} = useController({name: 'listAttributes'})


	const handleCreateField = () => {
		fieldFormState === 1 && (
			setAdditionalAttr(prev => {
				return {
					...prev,
					attributes:  [...prev.attributes, attribute]
				}
			})
		)
		fieldFormState === 2 && (
			setAdditionalAttr(prev => {
				return {
					...prev,
					listAttributes: [
							...prev.listAttributes, 
							{
								name: listAttribute.name,
								list: listAttribute.list
							}
						]
				}
			})
		)
		changeFieldFormState(0)
		console.log("additionalAttr: ", additionalAttr)
	};

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
			{fieldFormState === 0 && (
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
				{fieldFormState === 1 && formFieldText}
				{fieldFormState === 2 && formFieldList}
				{fieldFormState !== 0 && (
					<div className='flex justify-between mt-4'>
						<button
							className='py-1 px-3 bg-red-600 text-white font-semibold rounded-xl mx-3'
							onClick={() => {
								setFieldFormState(0);
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
