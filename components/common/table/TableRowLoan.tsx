import { BiEdit } from 'react-icons/bi';
import React from 'react';
import { MdOutlineDelete } from 'react-icons/md';
import Label from './Label';
import LabelState from './LabelState';
import ImageLabel from './ImageLabel';
import ActionButton from './ActionButton';

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

const images = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1256&q=80',
    'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=256&q=80',
  ];

  // Función para seleccionar aleatoriamente una imagen
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

const TableRowLoan = ({ loan }: Readonly<TableRowProps>) => {
	return (
		<>
			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800 dark:text-white'>
						{loan.id}
					</h2>
				</div>
			</td>

			<td className='px-12 text-sm font-medium whitespace-nowrap'>
				<Label
					text={loan.elemento}
					textColor={'orange-500'}
					bgColor={'orange-100'}
				></Label>
			</td>

			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<LabelState
					text={loan.estado}
				></LabelState>
			</td>

			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<ImageLabel
				text={loan.usuario} 
				textColor="black" 
				bgColor="white" 
				images={[getRandomImage()]}
				/>
			</td>

			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800 dark:text-white'>
						{loan.fechaPrestamo}
					</h2>
				</div>
			</td>

			<td className='px-4 text-sm font-medium whitespace-nowrap'>
				<div>
					<h2 className='font-medium text-gray-800 dark:text-white'>
						{loan.fechaDevolucion}
					</h2>
				</div>
			</td>
			
			<td className="pl-4 pr-4 text-center">
				<ActionButton icon={BiEdit} onClick={() => {console.log("Edit", loan.id)}} className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2"/>
				<ActionButton icon={MdOutlineDelete} onClick={() => {console.log("Delete", loan.id)}} className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded"/>
			</td>
		</>
	);
}

export  {TableRowLoan};