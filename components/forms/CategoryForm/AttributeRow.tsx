import ActionButton from '@/components/common/table/ActionButton';
import { useCategoryForm } from '@/store/categoryFormStore';
import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';

interface Props {
	name: string;
	value: string | string[];
}

const AttributeRow = ({ name, value }: Props) => {
	const deleteAttribute = useCategoryForm((state) => state.deleteAttribute);

	return (
		<tr className='text-base h-10 align-middle'>
			<td className='px-3 align-middle'>{name}</td>
			<td className='px-3 align-middle'>{value}</td>
			<td className='w-[16%] min-w-[50px] text-center align-middle'>
				<ActionButton
					icon={BiEdit}
					className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2'
					onClick={() => {
						console.log('clicked edit');
					}}
				/>
				<ActionButton
					icon={MdOutlineDelete}
					className='bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded'
					onClick={() => {
						deleteAttribute(name);
					}}
				/>
			</td>
		</tr>
	);
};

export default AttributeRow;
