import React, { useState } from 'react';
import Label from './Label';
import LabelState from './LabelState';
import styles from '@/styles/Table/Table.module.css';
import type { ILoan, ILoanTableInfo } from '@/types/loan-types';
import { FaSearchPlus } from 'react-icons/fa';
import btnStyles from '@/styles/common/button-styles.module.css';
import { getSessionToken } from '@/api-hooks/getSessionToken';
import { getLoanById } from '@/api-hooks/loan-api/getLoanByIdQuery';
import { useLoanTable } from '@/store/loan-table-store';
interface TableRowProps {
	loanInfo: ILoanTableInfo;
}

const TableRowLoan = ({ loanInfo }: Readonly<TableRowProps>) => {
	const token = getSessionToken();

	
	
	const selectedLoanId = useLoanTable((state) => state.selectedLoanId);
	const setSelectedLoanId = useLoanTable((state) => state.setSelectedLoanId);
	const setSelectedLoan = useLoanTable((state) => state.setSelectedLoan);
	const setLoanInfoModal = useLoanTable((state) => state.setLoanInfoModal);
	
	const { data, isSuccess } = getLoanById(token, selectedLoanId);

	const handleWatchMore = async () => {
		setSelectedLoanId(loanInfo.loanId);
		if(isSuccess){
			setLoanInfoModal(true)
			setSelectedLoan(data)
			console.log()
		}
	};	

	return (
		<>
			<tr>
				<td className='px-4 text-sm font-medium whitespace-nowrap'>
					<p className='font-medium text-gray-800'>{loanInfo.loanId}</p>
				</td>

				<td className='px-12 text-sm font-medium whitespace-nowrap'>
					<Label
						text={loanInfo.loanName}
						textColor={'text-orange-500'}
						bgColor={'bg-orange-100'}
					></Label>
				</td>

				<td className='px-4 text-sm font-medium whitespace-nowrap'>
					<LabelState text={loanInfo.loanState}></LabelState>
				</td>

				<td className='px-4 text-sm font-medium whitespace-nowrap'>
					<div className={`${styles.labelTable} text-gray-700 bg-white`}>
						<p className='px-2 '>{loanInfo.borrowerUser}</p>
					</div>
				</td>

				<td className='px-4 text-sm font-medium whitespace-nowrap'>
					<div className={`${styles.labelTable} text-gray-700 bg-white`}>
						<p className='px-2 '>{loanInfo.loanType}</p>
					</div>
				</td>

				<td className='px-4 text-sm whitespace-nowrap'>
					<p className='text-gray-700'>{loanInfo.loanDate}</p>
				</td>

				<td className='px-4 text-sm whitespace-nowrap'>
					<p className='text-gray-700'>{loanInfo.returnDate}</p>
				</td>

				<td className='pl-4 pr-4 text-center'>
					<button
						type='button'
						onClick={handleWatchMore}
						className={`${btnStyles.btn} bg-blue-400 text-sm hover:bg-blue-500`}
					>
						<FaSearchPlus className={`${btnStyles.iconBtn} `} />
					</button>
				</td>
			</tr>
		</>
	);
};

export { TableRowLoan };
