import { BiEdit } from 'react-icons/bi';
import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Label from './Label';
import LabelState from './LabelState';
import ImageLabel from './ImageLabel';
import ActionButton from './ActionButton';
import styles from '@/styles/Table/Table.module.css';

interface TableRowProps {
	loan: {
		id: number;
		elemento: string;
		estado: string;
		usuario: string;
		fechaPrestamo: string;
		fechaDevolucion: string;
	};
}


// Función para seleccionar aleatoriamente una imagen


const TableRowLoan = ({ loan }: Readonly<TableRowProps>) => {
	return (
		<>
			<td className='px-4 text-sm font-medium whitespace-nowrap'>
					<p className='font-medium text-gray-800'>
						{loan.id}
					</p>
			</td>

			<td className='px-12 text-sm font-medium whitespace-nowrap'>
				<Label
					text={loan.elemento}
					textColor={'text-orange-500'}
					bgColor={'bg-orange-100'}
				></Label>
			</td>

			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<LabelState
					text={loan.estado}
				></LabelState>
			</td>

			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<div className={`${styles.labelTable} text-gray-700 bg-white`}>
					<p className='px-2 '>{loan.usuario}</p>
				</div>
			</td>

			<td className='px-4 text-sm whitespace-nowrap'>
				<p className='text-gray-700'>
					{loan.fechaPrestamo}
				</p>
			</td>

			<td className='px-4 text-sm whitespace-nowrap'>
				<p className='text-gray-700'>
					{loan.fechaDevolucion}
				</p>
			</td>

			<td className="pl-4 pr-4 text-center">
				<ActionButton icon={BiEdit} onClick={() => { console.log("Edit", loan.id) }} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2" />
				<ActionButton icon={MdOutlineDelete} onClick={() => { console.log("Delete", loan.id) }} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded" />
			</td>
		</>
	);
}

export { TableRowLoan };