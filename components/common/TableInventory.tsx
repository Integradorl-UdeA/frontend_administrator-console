'use client';
import React, { useEffect, useState } from 'react';
import { TableRowInventory } from './table/TableRowInventory';
import { Table } from './table/Table';
import { getItemsTableHeaders } from '@/api-hooks/inventory-api/getItemTableHeaders';
import { useSession } from 'next-auth/react';
import { getItemsPerPage } from '@/api-hooks/inventory-api/getItemsPerPage';
import NavigationBtns from './table/NavigationBtns';
import { useQueryClient } from '@tanstack/react-query';

const TableInventory = () => {
	const token = useSession().data?.token?.token;
	const [currentPage, setCurrentPage] = useState<number>(0);
	const queryClient = useQueryClient()
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
	} = getItemsPerPage(token as string, currentPage);

	useEffect(() => {
		const refetch = async () =>{
			await queryClient.refetchQueries({queryKey: ['items-per-page']})
		}
		refetch().catch((error) => {console.log('Error', error)})
	}, [currentPage])
	
	const totalPages = itemsPage?.totalPages;

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
						{currentPage + 1} de {totalPages !== null ? totalPages : '0'}
					</span>
				</div>

				<div className='flex items-center mt-4 gap-x-4 sm:mt-0'>
					<NavigationBtns
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
						totalPages={totalPages as number}
					/>
				</div>
			</div>
		</div>
	);
};
export default TableInventory;
