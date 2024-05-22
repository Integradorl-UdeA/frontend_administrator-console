/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import {
	type FieldValues,
	type SubmitHandler,
	useFormContext,
} from 'react-hook-form';
import FormError from '../errors-logs/FormError';
import { FaPlus } from 'react-icons/fa6';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useLoanForm } from '@/store/loan-form-store';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';

const LisUserFormOnLoan = () => {
	const {setModalWidthClass, setModalTitle} = useModalContext()
	const {
		register,
		formState,
		reset,
		handleSubmit,
		formState: { errors, isSubmitSuccessful },
	} = useFormContext();
  const setFormSection = useLoanForm(state => state.setFormSection)
	const onSubmit: SubmitHandler<FieldValues> = (data) => {
    // TODO: create user
		console.log(data);
    setFormSection(0)
	};

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [formState, reset, isSubmitSuccessful]);

	setModalTitle("Crear un nuevo usuario")
	setModalWidthClass('w-4/6')
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='flex justify-between'>
				<div className='flex m-4 flex-col flex-1 justify-center h-full'>
					<label className='mr-5' htmlFor='name'>
						Nombre de usuario
					</label>
					<div className='flex'>
						<input
							type='text'
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('username', {
								required: {
									value: true,
									message: 'Debe llenar el campo',
								},
							})}
						/>
					</div>
					{errors.username != null && (
						<FormError msg={errors.username.message as string} />
					)}
				</div>
				<div className='flex m-4 flex-col flex-1 justify-center h-full'>
					<label className='mr-5' htmlFor='name'>
						Documento de Identidad
					</label>
					<div className='flex'>
						<input
							type='text'
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('id', {
								required: {
									value: true,
									message: 'Debe llenar el campo',
								},
							})}
						/>
					</div>
					{errors.id != null && <FormError msg={errors.id.message as string} />}
				</div>
			</div>
			<div className='flex justify-between'>
				<div className='flex m-4 flex-col flex-1 justify-center h-full'>
					<label className='mr-5' htmlFor='name'>
						Nombre
					</label>
					<div className='flex'>
						<input
							type='text'
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('name', {
								required: {
									value: true,
									message: 'Debe llenar el campo',
								},
							})}
						/>
					</div>
					{errors.name != null && (
						<FormError msg={errors.name.message as string} />
					)}
				</div>
				<div className='flex m-4 flex-col flex-1 justify-center h-full'>
					<label className='mr-5' htmlFor='name'>
						Apellidos:
					</label>
					<div className='flex'>
						<input
							type='text'
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('lastname', {
								required: {
									value: true,
									message: 'Debe llenar el campo',
								},
							})}
						/>
					</div>
					{errors.lastname != null && (
						<FormError msg={errors.lastname.message as string} />
					)}
				</div>
			</div>

			<div className='flex flex-col m-4 flex-1 justify-center'>
				<label htmlFor=''>Rol </label>
				<select
					className='w-full rounded-lg py-2 px-3 text-base focus:outline-greenTwo'
					{...register('role', {
						required: {
							value: true,
							message: 'Debe llenar el campo',
						},
					})}
				>
					<option value='GENERAL'>Estudiante</option>
					<option value='PROFESOR'>Profesor</option>
					<option value='MATERIA'>Egresado</option>
				</select>
				{errors.role != null && (
					<FormError msg={errors.role.message as string} />
				)}
			</div>
			<div className=' flex justify-between mt-8'>
				<button
					className={`flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100`}
					type='button'
					onClick={() => {
						setFormSection(0);
					}}
				>
					<IoMdArrowRoundBack
						className={`text-white bg-red-500 rounded-full p-1 mr-2 text-2xl`}
					/>
					Volver
				</button>
				<button
					className={`flex items-center justify-center bg-white py-2 px-3 rounded-full font-medium shadow-lg hover:bg-greenThree/10`}
					type='submit'
				>
					<FaPlus
						className={`text-white bg-greenThree rounded-full p-1 mr-2 text-2xl`}
					/>
					Crear Usuario
				</button>
			</div>
		</form>
	);
};

export default LisUserFormOnLoan;
