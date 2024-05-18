import CloseModal from '@/components/common/ModalWindow/CloseModal';
import React from 'react';
import {
	type FieldValues,
	type SubmitHandler,
	useFormContext,
} from 'react-hook-form';

const LoanForm = () => {
	const { register, handleSubmit } = useFormContext();

	const onSubmit:SubmitHandler<FieldValues> = (data) => {
		console.log(data)
	};
	return (
		<>
			<CloseModal />
			<form
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						ID del Item:
					</label>
					<input
						type='text'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('itemId', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						Quantity:
					</label>
					<input
						type='number'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('quantity', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						Nombre de usuario del Prestatario:
					</label>
					<input
						type='text'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('borrowerUser', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
				<label htmlFor=''>Tipo de préstamo: </label>
				<select
					className='w-full rounded-lg py-2 px-3 text-base focus:outline-greenTwo'
					{...register('loanType', {
						required: {
							value: true,
							message: 'Debe llenar el campo',
						},
					})}
				>
					<option value='GENERAL'>General</option>
					<option value='PROFESOR'>Profesor</option>
					<option value='MATERIA'>Materia</option>
				</select>
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						Fecha de retorno:
					</label>
					<input
						type='date'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('returnDate', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						Observaciones:
					</label>
					<textarea
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('observation', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>

				<button type='submit'>Melo</button>
			</form>
		</>
	);
};

export default LoanForm;
