import React from 'react';
import type { IItem } from '@/types/item-types';
import { useLoanForm } from '@/store/loan-form-store';
import type { ICategory } from '@/types/categoryTypes';

interface LoanTableRowProps {
	item: IItem;
	category: ICategory;
}

const ItemSelectionTableRow = ({ item, category }: Readonly<LoanTableRowProps>) => {
	const setSelectedItemId = useLoanForm((state) => state.setSelectedItemId);
	const selectedItemId = useLoanForm((state) => state.selectedItemId);

	const handleSelection = () => {
		if (selectedItemId === item.itemId) setSelectedItemId('');
		else setSelectedItemId(item.itemId);
	};

	const bgColor =
		selectedItemId === item.itemId
			? 'bg-greenThree/30 hover:bg-greenThree/50'
			: '';

	return (
		<tr
			onClick={handleSelection}
			className={`${bgColor} hover:bg-greenThree/10 hover:cursor-pointer`}
		>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800'>{item.itemId}</h2>
				</div>
			</td>

			<td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
				{category?.categoryName}
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<div>
					<p className='text-gray-700'>
						{category?.quantizable ? 'Cuantificable' : 'No cuantificable'}
					</p>
					<p className='text-gray-500'>
						{item.attributes.map((attr, index) => (
							<span key={attr.name}>
								{attr.name}: {attr.value} 
								{index !== item.attributes.length - 1 && (<> - </>)}
							</span>
						))}{' '}
					</p>
				</div>
			</td>
		</tr>
	);
};

export { ItemSelectionTableRow };
