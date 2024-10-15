import React, { useEffect } from 'react';
import {
	type FieldValues,
	type SubmitHandler,
	useFormContext,
} from 'react-hook-form';
import FormError from '../errors-logs/FormError';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';
import { FaPlus } from 'react-icons/fa6';
import btnStyles from '@/styles/common/button-styles.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { useLoanForm } from '@/store/loan-form-store';
import { IoMdArrowRoundBack } from 'react-icons/io';
import CloseModal from '@/components/common/ModalWindow/CloseModal';
import { getSessionToken } from '@/api-hooks/getSessionToken';
import { createLoan } from '@/api-hooks/loan-api/createLoan';
import type { IDTOLoanPost } from '@/types/loan-types';

const LoanForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState,
		getValues,
		formState: { errors, isSubmitSuccessful },
	} = useFormContext();

	const setFormSection = useLoanForm((state) => state.setFormSection);

	const token = getSessionToken();
	
	const {
		error,
		isError,
		mutateAsync: mutationCreateLoan,
	} = createLoan(token);

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		await mutationCreateLoan(data as IDTOLoanPost);
		if (isError !== null) {
			setFormSection(0);
			closeModal();
		}
	};

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset, formState]);

	const { closeModal, setModalWidthClass } = useModalContext();
	useEffect(() => {
		setModalWidthClass('w-3/5');
	}, []);

	return (
		<>
			<CloseModal
				onClose={() => {
					reset();
					setFormSection(0);
				}}
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className='flex justify-between'>
					<div className='flex m-4 flex-col flex-1 justify-center h-full'>
						<label className='mr-5' htmlFor='name'>
							ID del Item:
						</label>
						<div className='flex'>
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
							<button
								type='button'
								onClick={() => {
									setFormSection(2);
								}}
								className={`${btnStyles.btn} bg-blue-600 text-white rounded-full ml-2`}
							>
								<IoSearchSharp />
							</button>
						</div>
						{errors.itemId != null && (
							<FormError msg={errors.itemId.message as string} />
						)}
					</div>
					<div className='flex  m-4 flex-col flex-1 justify-center h-full'>
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
								validate: {
									smallestThanZero: (value) => {
										if (value <= 0) return 'Debe ser mayor que cero';
										return true;
									},
								},
								valueAsNumber: true,
							})}
						/>
						{errors.quantity != null && (
							<FormError msg={errors.quantity.message as string} />
						)}
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex flex-col m-4 flex-1 justify-center'>
						<label className='mr-5' htmlFor='name'>
							Nombre de usuario del Prestatario:
						</label>
						<p>{getValues('borrowerUser')}</p>
						{errors.borrowerUser != null && (
							<FormError msg={errors.borrowerUser.message as string} />
						)}
					</div>
					<div className='flex flex-col m-4 flex-1 justify-center'>
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
						{errors.loanType != null && (
							<FormError msg={errors.loanType.message as string} />
						)}
					</div>
				</div>
				<div className='flex justify-between'>
					<div className='flex flex-col m-4 flex-1 justify-center'>
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
						{errors.returnDate != null && (
							<FormError msg={errors.returnDate.message as string} />
						)}
					</div>
					<div className='flex flex-col m-4 flex-1 justify-center'>
						<label className='mr-5' htmlFor='name'>
							Observaciones:
						</label>
						<textarea
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('observation')}
						/>
					</div>
				</div>
				{error !== null && <p>Error: {error.message}</p>}
				<div className=' flex justify-between mt-8'>
					<button
						className={btnStyles.btnCancel}
						type='button'
						onClick={() => {
							reset();
							setFormSection(0);
						}}
					>
						<IoMdArrowRoundBack
							className={`text-white bg-red-500 ${btnStyles.btnIcon}`}
						/>
						Volver
					</button>
					<button className={btnStyles.btnSubmit} type='submit'>
						<FaPlus
							className={`text-white bg-greenThree ${btnStyles.btnIcon}`}
						/>
						Realizar Préstamo
					</button>
				</div>
			</form>
			{}
		</>
	);
};

export default LoanForm;
