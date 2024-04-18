import { BiEdit } from 'react-icons/bi';
import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import IconsActions from './IconsActions';
import Label from './Label';
import LabelState from './LabelState';

interface TableRowProps {
	inventory: {
		id: number;
		estado: string;
		categoria: string;
		atributos: string[];
		quantizable: boolean;
		wallet: string;
	};
}

const TableRowInventory = ({ inventory }: Readonly<TableRowProps>) => {
	return (
		<>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800 dark:text-white'>
						{inventory.id}
					</h2>
				</div>
			</td>

			<td className='px-12 py-4 text-sm font-medium whitespace-nowrap'>
				<LabelState
					text={inventory.estado}
				></LabelState>
			</td>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
				<Label
					text={inventory.categoria}
					textColor={'rose-500'}
					bgColor={'rose-100'}
					darkMode={"gray-800"}
				></Label>
			</td>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
            <Label
					text={inventory.wallet}
					textColor={'orange-500'}
					bgColor={'orange-100'}
					darkMode={'gray-800'}
				></Label>
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<div>
					<h4 className='text-gray-700 dark:text-gray-200'>
						{inventory.quantizable ? 'Cuantizable' : 'No cuantizable'}
					</h4>
					<p className="text-gray-500 dark:text-gray-400">{inventory.atributos} </p>
				</div>
			</td>
			<IconsActions onDelete={MdOutlineDelete} onEdit={BiEdit}></IconsActions>
		</>
	);

    
}

export  {TableRowInventory};
