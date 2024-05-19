import CloseModal from '@/components/common/ModalWindow/CloseModal';
import React, { useEffect } from 'react';
import {
	type FieldValues,
	type SubmitHandler,
	useFormContext,
} from 'react-hook-form';
import FormError from '../errors-logs/FormError';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa6';
import btnStyles from '@/styles/common/button-styles.module.css';
import { IoSearchSharp } from 'react-icons/io5';
import { useLoanForm } from '@/store/loan-form-store';
import LendedItemSelection from './LendedItemSelection';

const LoanForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState,
		formState: { errors, isSubmitSuccessful },
	} = useFormContext();
	const { closeModal } = useModalContext();
	const formSection = useLoanForm((state) => state.formSection);
	const setFormSection = useLoanForm((state) => state.setFormSection);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data);
		setFormSection(0);
		closeModal();
	};

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [isSubmitSuccessful, reset, formState]);

	if (formSection === 1) return <LendedItemSelection />;

	return (
		<>
			<CloseModal />
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
									setFormSection(1);
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
									equalZero: (value) => {
										if (value === 0) return 'Debe ser diferente de cero';
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
				<div className=' flex justify-between mt-8'>
					<button
						className={btnStyles.btnCancel}
						type='button'
						onClick={() => {
							reset();
							closeModal();
						}}
					>
						<AiOutlineClose
							className={`text-white bg-red-500 ${btnStyles.btnIcon}`}
						/>
						Cancelar
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
