import type { ILoan } from '@/types/loan-types';
import React, { useEffect } from 'react';
import CloseModal from '../common/ModalWindow/CloseModal';
import { useModalContext } from '../common/ModalWindow/modal-window-context';
import { TbPointFilled } from 'react-icons/tb';
import btnStyles from '@/styles/common/button-styles.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { utfToDateTime } from '@/lib/utfToDateTime';


interface Props {
	loan: ILoan;
}
const LoanCard = ({ loan }: Props) => {
	const { setModalWidthClass, closeModal } = useModalContext();
	const isActive =
		loan.loanState === 'ACTIVE'
			? 'text-greenOne bg-greenFour'
			: 'text-red-900 bg-red-400/50';
	const [returnDate, returnTime] = utfToDateTime(loan.returnDate);
	const [loanDate, loanTime] = utfToDateTime(loan.loanDate);


	useEffect(() => {
		setModalWidthClass('w-1/2');
	}, []);
	return (
		<>
			<CloseModal />
			<div className='text-textColorOne'>
				<div className='flex w-full justify-between items-center mb-3'>
					<span className='font-bold text-2xl'>{loan.itemId}</span>
					<p
						className={`${isActive} flex items-center px-2 py-1 rounded-xl text-sm font-semibold`}
					>
						<TbPointFilled className='' /> {loan.loanState}
					</p>
				</div>
				<div>
					<span>Id Préstamo: </span>
					<span className='font-semibold'>{loan.loanId}</span>
				</div>
				<div>
					<span>Prestatario: </span>
					<span className='font-semibold'>{loan.borrowerUser}</span>
				</div>
				<div className='mt-4 grid grid-rows-2 grid-cols-2 gap-y-2 gap-x-3'>
					<div className='flex flex-col'>
						<span className='font-semibold'>Prestador:</span>
						<span className=''>{loan.lenderUser}</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-semibold'>Tipo de Préstamo:</span>
						<span>{loan.loanType}</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-semibold'>Fecha de Préstamo:</span>
						<span>
							{loanDate} | {loanTime}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='font-semibold'>Fecha de devolución:</span>
						<span>
							{returnDate} | {returnTime}
						</span>
					</div>
				</div>
				<div className='mt-7 flex justify-between mb-5'>
					<button className={`${btnStyles.btn} bg-red-600 text-white`}
					onClick={closeModal}>
						{' '}
						<IoMdArrowRoundBack className={`${btnStyles.btnIcon}`} /> Volver
					</button>
				</div>
			</div>
		</>
	);
};

export default LoanCard;
