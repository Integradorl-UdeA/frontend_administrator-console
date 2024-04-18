'use client';
import React, { useState } from 'react';
import { getInventary } from '@/services/getInventary';
import {TableRowInventory} from './table/TableRowInventory';
import {Table} from './table/Table';
import NextPrevButton from './table/NextPrevButton';

const inventory = getInventary();

const column = ['ID', 'Estado', 'Categoría', 'Wallet', 'Atributos', 'Acciones'];

const TableInventory = () => {
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5; // Número de elementos por página

	// Lógica para calcular los índices de los elementos que se mostrarán en la página actual
	const indexOfLastItem = currentPage * itemsPerPage;
	const indexOfFirstItem = indexOfLastItem - itemsPerPage;
	const currentItems = inventory.slice(indexOfFirstItem, indexOfLastItem);

	// Función para ir a la página anterior
	const goToPreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	// Función para ir a la página siguiente
	const goToNextPage = () => {
		setCurrentPage((prevPage) =>
			Math.min(prevPage + 1, Math.ceil(inventory.length / itemsPerPage)),
		);
	};

	return (
		<div>
			
				<div className='flex flex-col mt-6'>
					<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
						<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
							<div className='overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg'>
								
								<Table column={column}>
									{currentItems.map((item, index) => (
										<tr key={item.id}>
											<TableRowInventory inventory={item}></TableRowInventory>
										</tr>
									))}
								</Table>
							</div>
						</div>
					</div>
				</div>

				<div className='mt-6 sm:flex sm:items-center sm:justify-between '>
					<div className='text-sm text-gray-500 dark:text-gray-400'>
						Página{' '}
						<span className='font-medium text-gray-700 dark:text-gray-100'>
							{currentPage} de {Math.ceil(inventory.length / itemsPerPage)}
						</span>
					</div>

					<div className='flex items-center mt-4 gap-x-4 sm:mt-0'>
						<NextPrevButton
							onClick={goToPreviousPage}
							disabled={currentPage === 1}
							text={'Anterior mor'}
							d={'M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'}
							svg={'http://www.w3.org/2000/svg'}
						></NextPrevButton>

						<NextPrevButton
							onClick={goToNextPage}
							disabled={currentPage === Math.ceil(inventory.length / itemsPerPage)}
							text={'Siguiente'}
							d={'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'}
							svg={'http://www.w3.org/2000/svg'}
						></NextPrevButton>
						
					</div>
				</div>
		</div>
	);
};
export default TableInventory;
