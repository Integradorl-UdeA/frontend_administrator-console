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
	const setEditingAttribute = useCategoryForm(
		(state) => state.setEditingAttribute,
	);
	const setFormFieldStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);

	const isTextAttribute = typeof value === 'string';

	const handleEditClick = () => {
		if (isTextAttribute) {
			setEditingAttribute(name);
			setFormFieldStatus(3)
			return;
		}
		setEditingAttribute({ name, list: value });
		setFormFieldStatus(4)

	};

	return (
		<tr className='text-base h-10 align-middle'>
			<td className='px-3 align-middle'>{name}</td>
			<td className='px-3 align-middle'>{isTextAttribute ? value : value.join(', ')}</td>
			<td className='w-[16%] min-w-[50px] text-center align-middle'>
				<ActionButton
					icon={BiEdit}
					className='bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2'
					onClick={() => {
						handleEditClick();
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
