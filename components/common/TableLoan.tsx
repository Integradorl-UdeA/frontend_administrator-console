'use client';
import React, { useEffect, useState } from 'react';
import { TableRowLoan } from './table/TableRowLoan';
import { Table } from './table/Table';
import { getLoanPerPage } from '@/api-hooks/loan-api/getLoanPerPageQuery';
import { useSession } from 'next-auth/react';
import { getLoanTableHeaders } from '@/api-hooks/loan-api/getLoanTableHeaders';
import NavigationBtns from './table/NavigationBtns';
import { useQueryClient } from '@tanstack/react-query';

const TableLoan = () => {
	const token = useSession().data?.token?.token;
	const [currentPage, setCurrentPage] = useState<number>(0);
	const queryClient = useQueryClient()
	const {
		data: loanPage,
		isLoading: isLoadingLoan,
		isError: isErrorLoan,
		error: errorLoan,
	} = getLoanPerPage(token as string, currentPage);
	const {
		data: headers,
		isError: isErrorHeaders,
		error: errorHeaders,
	} = getLoanTableHeaders(token as string);

	useEffect(() => {
		const refetch = async () =>{
			await queryClient.refetchQueries({queryKey: ['items-per-page']})
		}
		refetch().catch((error) => {console.log('Error', error)})
	}, [currentPage])

	const totalPages = loanPage?.totalPages;

	if (isErrorHeaders)
		return <p>Error cargando los headers: {errorHeaders.message}</p>;
	if (isErrorLoan)
		return <p> Error cargando los préstamos: {errorLoan.message}</p>;
	if (isLoadingLoan) return <p> Cargandoooo prestamos </p>;
	return (
		<div>
			<div className='flex flex-col mt-6'>
				<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
						<div className='overflow-hidden border border-gray-200 md:rounded-lg'>
							<Table column={headers as string[]}>
								{loanPage?.items.map((loan) => (
									<tr key={loan.loanId}>
										<TableRowLoan loanInfo={loan}></TableRowLoan>
									</tr>
								))}
							</Table>
						</div>
					</div>
				</div>
			</div>

			<div className='mt-6 sm:flex sm:items-center sm:justify-between '>
				<div className='text-sm text-gray-500'>
					Página{' '}
					<span className='font-medium text-gray-700'>
						{currentPage + 1} de {totalPages}
					</span>
				</div>

				<NavigationBtns
					totalPages={totalPages as number}
					setCurrentPage={setCurrentPage}
					currentPage={currentPage}
				/>
			</div>
		</div>
	);
};
export default TableLoan;
