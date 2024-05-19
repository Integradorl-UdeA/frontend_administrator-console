import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import React from 'react';
import Label from './Label';
import LabelState from './LabelState';
import ActionButton from './ActionButton';
import type { IItemTableResponse } from '@/types/item-types';

interface TableRowProps {
	itemTable: IItemTableResponse;
}

const TableRowInventory = ({ itemTable }: Readonly<TableRowProps>) => {
	return (
		<tr>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800'>{itemTable.id}</h2>
				</div>
			</td>

			<td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
				<LabelState text={itemTable.state}></LabelState>
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<Label
					text={itemTable.category}
					textColor='text-rose-500'
					bgColor='bg-rose-100'
				></Label>
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<Label
					text={itemTable.wallet}
					textColor='text-orange-500'
					bgColor='bg-orange-100'
				></Label>
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
			<td className='pl-4 pr-4 text-center'>
				<ActionButton
					icon={BiEdit}
					onClick={() => {
						console.log('Edit', itemTable.id);
					}}
					className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2'
				/>
				<ActionButton
					icon={MdOutlineDelete}
					onClick={() => {
						console.log('Delete', itemTable.id);
					}}
					className='bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded'
				/>
			</td>
		</tr>
	);
};

export { TableRowInventory };
