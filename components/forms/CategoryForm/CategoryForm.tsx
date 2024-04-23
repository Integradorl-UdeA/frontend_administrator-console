/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import commonStyles from '@/styles/common/Inputs.module.css';
import sForms from '@/styles/common/Forms.module.css';
import InputSwitch from '@/components/common/InputSwitch';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import type { IAdditionalAttr } from '@/types/categoryTypes';
import AdditionalCatAttributes from './AdditionalCatAttributes';

const CategoryForm = () => {
	const { register, handleSubmit, control } = useForm();
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	const defaultAdditionalAttr: IAdditionalAttr = {
		attributes: [],
		listAttributes: [],
	};
	const [additionalAttr, setAdditionalAttr] = useState<IAdditionalAttr>(
		defaultAdditionalAttr,
	);

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
				<AdditionalCatAttributes
					additionalAttr={additionalAttr}
					setAdditionalAttr={setAdditionalAttr}
				/>
				<div className='flex'>
					<button
						className=' flex bg-green-600 text-white px-3 py-1 rounded-lg font-semibold m-2 ml-auto'
						type='submit'
					>
						Enviar
					</button>
				</div>
			</form>
		</div>
	);
};

export default CategoryForm;
