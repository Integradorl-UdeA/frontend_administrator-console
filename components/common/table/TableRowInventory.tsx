import { BiEdit } from 'react-icons/bi';
import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Label from './Label';
import LabelState from './LabelState';
import ActionButton from './ActionButton';

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
					<h2 className='font-medium text-gray-800'>
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
					textColor='yellow-500'
					bgColor='yellow-100'
				></Label>
			</td>
			<td className='px-4 py-4 text-sm font-medium whitespace-nowrap'>
            	<Label
					text={inventory.wallet}
					textColor='orange-500'
					bgColor='orange-100'
				></Label>
			</td>
			<td className='px-4 py-4 text-sm whitespace-nowrap'>
				<div>
					<h4 className='text-gray-700'>
						{inventory.quantizable ? 'Cuantificable' : 'No cuantificable'}
					</h4>
					<p className="text-gray-500">{inventory.atributos} </p>
				</div>
			</td>
			<td className="pl-4 pr-4 text-center">
				<ActionButton icon={BiEdit} onClick={() => {console.log("Edit", inventory.id)}} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2"/>
				<ActionButton icon={MdOutlineDelete} onClick={() => {console.log("Delete", inventory.id)}} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"/>
			</td>
		</>
	);

    
}

export  {TableRowInventory};
