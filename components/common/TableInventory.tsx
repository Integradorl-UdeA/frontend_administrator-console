'use client';
import React, { useState, Suspense } from 'react';
import { getInventary } from '@/services/getInventary';
import { TableRowInventory } from './table/TableRowInventory';
import { Table } from './table/Table';
import NextPrevButton from './table/NextPrevButton';
import { getItemsTableHeaders } from '@/api-hooks/inventory-api/getItemTableHeaders';
import { useSession } from 'next-auth/react';
import { getItemsByPage } from '@/api-hooks/inventory-api/getItemsByPage';

const inventory = getInventary();

const TableInventory = () => {
	const token = useSession().data?.token?.token;

	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5; // Número de elementos por página


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

	const {
		data: tableHeaders,
		isError: isErrorHeaders,
		error: errorHeaders,
	} = getItemsTableHeaders(token as string);
	const {
		data: itemsPage,
		isLoading: isLoadingItems,
		isError: isErrorItems,
		error: errorItems,
	} = getItemsByPage(token as string);

	if (isErrorHeaders) return <p>Header Error: {errorHeaders.message}</p>;
	if (isErrorItems) return <p>Item Error: {errorItems.message}</p>;
	if (isLoadingItems) return <p> Cargandoooo </p>;
	return (
		<div>
			<div className='flex flex-col mt-6'>
				<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
						<div className='overflow-hidden border border-gray-200 md:rounded-lg'>
							<Table column={tableHeaders as string[]}>
								{itemsPage?.items?.map((itemTable) => {
									return (
										<tr key={itemTable.id}>
											<TableRowInventory
												itemTable={itemTable}
											></TableRowInventory>
										</tr>
									);
								})}
							</Table>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-6 sm:flex sm:items-center sm:justify-between '>
				<div className='text-sm text-gray-500'>
					Página{' '}
					<span className='font-medium text-gray-700'>
						{currentPage} de {Math.ceil(inventory.length / itemsPerPage)}
					</span>
				</div>

				<div className='flex items-center mt-4 gap-x-4 sm:mt-0'>
					<NextPrevButton
						onClick={goToPreviousPage}
						disabled={currentPage === 1}
						text={'Anterior'}
						d={'M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'}
						svg={'http://www.w3.org/2000/svg'}
					></NextPrevButton>

					<NextPrevButton
						onClick={goToNextPage}
						disabled={
							currentPage === Math.ceil(inventory.length / itemsPerPage)
						}
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
