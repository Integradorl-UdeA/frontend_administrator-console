import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';
import React from 'react';
import Label from './Label';
import LabelState from './LabelState';
import ActionButton from './ActionButton';
import type { ICategory } from '@/types/categoryTypes';

interface TableRowProps {
	category: ICategory;
}

const TableRowCategory = ({ category }: Readonly<TableRowProps>) => {
	return (
		<>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800'>{category.id}</h2>
				</div>
			</td>

			<td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
				<LabelState text={category.categoryName}></LabelState>
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<Label
					text={category.idItemField as string}
					textColor='text-rose-500'
					bgColor='bg-rose-100'
				></Label>
			</td>

			<td className='px-4 py-4 text-sm font-base whitespace-nowrap'>
				<div>
					<p className='font-base text-textColorOne'>
						{category.attributes.join(', ')}
					</p>
				</div>
			</td>

			<td className='px-4 py-4 text-sm font-base whitespace-nowrap'>
				<div>
					<p className='font-base text-textColorOne'>
						{category.listAttributes.map((attr) => attr.name).join(', ')}
					</p>
				</div>
			</td>

			<td className='pl-4 pr-4 text-center'>
				<ActionButton
					icon={BiEdit}
					onClick={() => {}}
					className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2'
				/>
				<ActionButton
					icon={MdOutlineDelete}
					onClick={() => {}}
					className='bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded'
				/>
			</td>
		</>
	);
};

export { TableRowCategory };
