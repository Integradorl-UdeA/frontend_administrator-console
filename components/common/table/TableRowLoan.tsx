import { BiEdit } from 'react-icons/bi';
import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Label from './Label';
import LabelState from './LabelState';
import ActionButton from './ActionButton';
import styles from '@/styles/Table/Table.module.css';
import type { ILoanTableInfo } from '@/types/loan-types';

interface TableRowProps {
	loanInfo: ILoanTableInfo;
}

const TableRowLoan = ({ loanInfo }: Readonly<TableRowProps>) => {
	return (
		<>
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
				<ActionButton
					icon={BiEdit}
					onClick={() => {
						console.log('Edit',loanInfo.loanId);
					}}
					className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2'
				/>
				<ActionButton
					icon={MdOutlineDelete}
					onClick={() => {
						console.log('Delete', loanInfo.loanId);
					}}
					className='bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded'
				/>
			</td>
		</>
	);
};

export { TableRowLoan };
