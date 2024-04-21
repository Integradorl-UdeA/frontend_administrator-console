/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import commonStyles from '@/styles/common/Inputs.module.css';
import sForms from '@/styles/common/Forms.module.css';
import InputSwitch from '@/components/common/InputSwitch';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import CreateFieldForm from './CreateFieldForm';
import type { IfieldInfo } from '@/types/categoryTypes';

const CategoryForm = () => {
	const { register, handleSubmit, control } = useForm();
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	const [fieldsInfo, setFieldsInfo] = useState<IfieldInfo[]>([]);
	const [fieldFormState, setFormFieldState] = useState<0 | 1 | 2>(0);

	const handleChangeText = () => {
		if (fieldFormState === 1) return;
		setFormFieldState(1);
	};

	const handleChangeList = () => {
		if (fieldFormState === 2) return;
		setFormFieldState(2);
	};

	return (
		<div className='flex flex-col items-center justify-center'>
			<p className='text-lg mb-5'>
				{' '}
				En este formulario podrá crear una nueva categoría.
			</p>
			<form className='text-xl' onSubmit={handleSubmit(onSubmit)}>
				<div className={sForms.formSectionRow}>
					<label className='mr-5' htmlFor='name'>
						Nombre:{' '}
					</label>
					<input
						type=''
						className={commonStyles.inputText}
						{...register('nombre')}
					/>
				</div>
				<div className='my-3 flex justify-between items-center'>
					<InputSwitch
						label='Cuantizable'
						control={control}
						name='quantizable'
					/>
					<InputSwitch label='Prestable' control={control} name='prestable' />
				</div>
				<div className="my-2">
					{fieldsInfo.length !== 0 && (
						<div className='bg-slate-300 p-3 rounded-lg'>
							<h3 className='font-bold my-2 '>Atributos adicionales</h3>
							{fieldsInfo.map((field, index) => (
								<div key={index}>
									{field.type === 1 && (
										<p>{field.name} - Texto</p>
									)}
									{field.type === 2 && (
										<p>{field.name} - {field.list?.join(", ")}</p>
									)}
								</div>
							))}
						</div>
					)}
					{fieldFormState === 0 && (
						<div className='flex my-2'>
							<button
								className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-r-none bg-green-600 text-white font-bold'
								type='button'
								onClick={handleChangeText}
							>
								Crear nuevo campo de texto
							</button>
							<button
								className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-l-none bg-white text-green-600 font-bold'
								type='button'
								onClick={handleChangeList}
							>
								Crear nuevo campo de lista
							</button>
						</div>
					)}
					{fieldFormState !== 0 && (
						<CreateFieldForm
							fieldFormState={fieldFormState}
							setFieldFormState={setFormFieldState}
							setFieldsInfo={setFieldsInfo}
							fieldsInfo={fieldsInfo}
						/>
					)}
				</div>
				<div className='flex'>
					<button className=" flex bg-green-600 text-white px-3 py-1 rounded-lg font-semibold m-2 ml-auto" type='submit'>Enviar</button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
