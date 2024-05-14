/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import InputSwitch from '@/components/common/InputSwitch';
import { useController, useFormContext } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import AdditionalCatAttributes from './AdditionalCatAttributes';
import { useCategoryForm } from '@/store/categoryFormStore';
import { FaPlus } from 'react-icons/fa6';
import { AiOutlineClose } from 'react-icons/ai';
import FormError from '../errors-logs/FormError';

interface Props {
	closeModal?: () => void;
}
const CategoryForm = ({ closeModal }: Props) => {
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);
	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const {
		register,
		handleSubmit,
		control,
		formState: { errors },
	} = useFormContext();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		closeModal != null && closeModal();
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
			<form className='text-lg' onSubmit={handleSubmit(onSubmit)}>
				<div className='flex justify-between items-center mb-6'>
					<label className='mr-5' htmlFor='name'>
						Nombre:{' '}
					</label>
					<input
						type=''
						className='w-full rounded-lg py-1 px-3 text-lg focus:outline-greenTwo'
						{...register('categoryName', {
							required: {
								value: true,
								message: 'Debe escribir el nombre de la categoría',
							},
						})}
					/>
					<div className='ml-10'>
						<InputSwitch
							label='Cuantificable'
							name='quantizable'
						/>
					</div>
				</div>
				<AdditionalCatAttributes />
				{(errors.nombre != null) && 
					<div className='w-full flex items-center justify-center my-5'>
						<FormError msg={errors.nombre?.message as string}/>
					</div>}
				{fieldFormStatus === 0 && (
					<>
						<hr className='border border-greenFour/50 border-solid' />
						<div className=' flex justify-between mt-8'>
							<button
								className=' flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100'
								type='button'
								onClick={() => {
									closeModal != null && closeModal();
								}}
							>
								<AiOutlineClose className='text-white bg-red-500 rounded-full p-1 mr-2 text-2xl' />
								Cancelar
							</button>
							<button
								className=' flex items-center justify-center bg-white py-2 px-3 rounded-full font-medium shadow-lg hover:bg-greenThree/10'
								type='submit'
							>
								<FaPlus className='text-white bg-greenThree rounded-full p-1 mr-2 text-2xl' />
								Crear Categoría
							</button>
						</div>
					</>
				)}
			</form>
		</div>
	);
};

export default CategoryForm;
