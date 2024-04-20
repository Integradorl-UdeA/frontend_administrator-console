import React, { useState } from 'react';
import type { TfieldInfo } from '@/types/formTypes';
import styForm from '@/styles/common/Forms.module.css';

interface Props {
	fieldFormState: 0 | 1 | 2;
	setFieldFormState: React.Dispatch<React.SetStateAction<0 | 2 | 1>>;
	setFieldsInfo: React.Dispatch<React.SetStateAction<TfieldInfo[]>>;
	fieldsInfo: TfieldInfo[];
}

const CreateFieldForm = ({
	fieldFormState,
	setFieldFormState,
	setFieldsInfo,
	fieldsInfo,
}: Props) => {
	const defaultFormData: TfieldInfo = {
		name: '',
		type: 0,
	};
	const [formData, setFormData] = useState<TfieldInfo>(defaultFormData);
	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let { name, value }: { name: string; value: string | string[] } = e.target;
		if (name === 'list')
			value = value
				.trim()
				.replace(/\s*,\s*/g, ',')
				.split(',');
		setFormData({
			...formData,
			[name]: value,
			type: fieldFormState,
		});
	};

	const handleCreateField = () => {
		setFormData({ ...formData, type: 1 });
		setFieldFormState(0);
		console.log(formData);
		setFieldsInfo((prev) => [...prev, formData]);
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
				name='name'
				onChange={handleOnChange}
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
					onChange={handleOnChange}
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
					onChange={handleOnChange}
				/>
			</div>
		</div>
	);

	return (
		<div className='bg-slate-300 p-5 rounded-lg'>
			{fieldFormState === 1 && formFieldText}
			{fieldFormState === 2 && formFieldList}
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
		</div>
	);
};

export default CreateFieldForm;
