import CloseModal from '@/components/common/ModalWindow/CloseModal';
import React from 'react';
import {
	type FieldValues,
	type SubmitHandler,
	useFormContext,
} from 'react-hook-form';
import btnStyles from '@/styles/common/button-styles.module.css';
import { MdOutlineAssignmentReturn } from 'react-icons/md';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';
import { getSessionToken } from '@/api-hooks/getSessionToken';
import { returnLoan } from '@/api-hooks/loan-api/returnLoanQuery';
import type { IReturnLoanPost } from '@/types/loan-types';
import { useQueryClient } from '@tanstack/react-query';

interface Props {
	loanId: number;
}
const ReturnLoanForm = ({ loanId }: Props) => {
	const { register, getValues, handleSubmit } = useFormContext();

	const { closeModal } = useModalContext();
	const token = getSessionToken();
	const { mutate: mutationReturnLoan, isSuccess } = returnLoan(token);
	const queryClient = useQueryClient();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		mutationReturnLoan(data as IReturnLoanPost);
		if (isSuccess) {
			
		}
		closeModal();
	};
	return (
		<>
			<CloseModal />
			<p>Retornar el préstamo con ID: {loanId}</p>

			<div className='mt-4 mb-3 flex gap-8'>
				<p>
					<b>ID del préstamo: </b> {loanId}
				</p>
				<p>
					<b>Auxiliar que recibe: </b> {getValues('lenderUser')}
				</p>
			</div>

			<form onSubmit={handleSubmit(onSubmit)} className='flex flex-col'>
				<div className='flex flex-col m-4 flex-1 justify-center'>
					<label className='mr-5' htmlFor='observation'>
						Observaciones:
					</label>
					<textarea
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('observation')}
					/>
				</div>
				<div className='flex justify-between'>
					<button
						className={btnStyles.btnCancel}
						type='button'
						onClick={closeModal}
					>
						<IoMdArrowRoundBack
							className={`text-white bg-red-500 ${btnStyles.btnIcon}`}
						/>
						Cancelar
					</button>
					<button className={btnStyles.btnSubmit} type='submit'>
						<MdOutlineAssignmentReturn
							className={`text-white bg-yellow-500  ${btnStyles.btnIcon}`}
						/>
						Devolver
					</button>
				</div>
			</form>
		</>
	);
};

export default ReturnLoanForm;
