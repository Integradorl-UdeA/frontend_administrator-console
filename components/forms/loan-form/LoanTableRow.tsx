import React from 'react';
import type { IItemTableResponse } from '@/types/item-types';
import { useLoanForm } from '@/store/loan-form-store';

interface LoanTableRowProps {
	itemTable: IItemTableResponse;
}

const LoanTableRow = ({ itemTable }: Readonly<LoanTableRowProps>) => {
	const setSelectedItemId = useLoanForm((state) => state.setSelectedItemId);
	const selectedItemId = useLoanForm((state) => state.selectedItemId);

	const handleSelection = () => {
        if (selectedItemId === itemTable.id) setSelectedItemId('');
		else setSelectedItemId(itemTable.id);
	};
    
	const bgColor = selectedItemId === itemTable.id ? 'bg-greenThree/30 hover:bg-greenThree/50' : '';
    
	return (
		<tr
			onClick={handleSelection}
			className={`${bgColor} hover:bg-greenThree/10 hover:cursor-pointer`}
		>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800'>{itemTable.id}</h2>
				</div>
			</td>

			<td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
				{itemTable.category}
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<div>
					<p className='text-gray-700'>
						{itemTable.quantizable ? 'Cuantificable' : 'No cuantificable'}
					</p>
					<p className='text-gray-500'>
						{itemTable.attributes.map((attr) => attr)}{' '}
					</p>
				</div>
			</td>
		</tr>
	);
};

export { LoanTableRow };
