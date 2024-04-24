/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import InputSwitch from '@/components/common/InputSwitch';
import { useController, useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import AdditionalCatAttributes from './AdditionalCatAttributes';
import { useCategoryForm } from '@/store/categoryFormStore';
import { FaPlus } from 'react-icons/fa6';

const CategoryForm = () => {
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);
	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const { register, handleSubmit, control } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
	};

	// Creating the controllers for the additional attributes fields
	const { field: attributesField } = useController({
		name: 'attributes',
		control,
	});
	const { field: listAttributeField } = useController({
		name: 'listAttributes',
		control,
	});

	// Updating the field when additionalAttr state changes
	useEffect(() => {
		attributesField.onChange(additionalAttr.attributes);
		listAttributeField.onChange(additionalAttr.listAttributes);
	}, [additionalAttr]);

	return (
		<div className='flex flex-col items-center justify-center text-textColorOne'>
			{/* <p className='text-lg mb-5'>
				{' '}
				En este formulario podrá crear una nueva categoría.
			</p> */}
			<form className='text-lg' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex justify-between items-center mb-6'>
						<label className='mr-5' htmlFor='name'>
							Nombre:{' '}
						</label>
						<input
							type=''
							className='w-full rounded-lg py-1 px-3 text-lg focus:outline-greenTwo'
							{...register('nombre')}
						/>
					<div className='ml-10'>
						<InputSwitch
							label='Cuantificable'
							control={control}
							name='quantizable'
						/>
					</div>
				</div>
				<AdditionalCatAttributes control={control} />
				{fieldFormStatus === 0 && (
					<div className='flex mt-8'>
						<button
							className=' flex items-center justify-center bg-white w-max h-max py-2 px-3  ml-auto rounded-full font-medium shadow-lg justify-self-end'
							type='submit'
						>
							<FaPlus className='text-white bg-greenThree rounded-full p-1 mr-2 text-2xl' />
							Crear Categoría
						</button>
					</div>
				)}
			</form>
		</div>
	);
};

export default CategoryForm;
