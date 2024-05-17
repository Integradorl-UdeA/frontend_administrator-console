'use client';
import React, { useState } from 'react';
import { getLoan } from '@/services/getLoan';
import { TableRowLoan } from './table/TableRowLoan';
import { Table } from './table/Table';
import NextPrevButton from './table/NextPrevButton';
import { getLoanPerPage } from '@/api-hooks/loan-api/getLoanPerPageQuery';
import { useSession } from 'next-auth/react';
import { getLoanTableHeaders } from '@/api-hooks/loan-api/getLoanTableHeaders';

const loan = getLoan();


const TableLoan = () => {
	const token = useSession().data?.token?.token;
	const [currentPage, setCurrentPage] = useState(1);
	const itemsPerPage = 5; // Número de elementos por página

	// Lógica para calcular los índices de los elementos que se mostrarán en la página actual

	// Función para ir a la página anterior
	const goToPreviousPage = () => {
		setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
	};

	// Función para ir a la página siguiente
	const goToNextPage = () => {
		setCurrentPage((prevPage) =>
			Math.min(prevPage + 1, Math.ceil(loan.length / itemsPerPage)),
		);
	};

	const {
		data: loanPage,
		isLoading: isLoadingLoan,
		isError: isErrorLoan,
		error: errorLoan,
	} = getLoanPerPage(token as string, 0);
	const {
		data: headers,
		isError: isErrorHeaders,
		error: errorHeaders,
	} = getLoanTableHeaders(token as string);
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
						{currentPage} de {Math.ceil(loan.length / itemsPerPage)}
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
						disabled={currentPage === Math.ceil(loan.length / itemsPerPage)}
						text={'Siguiente'}
						d={'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'}
						svg={'http://www.w3.org/2000/svg'}
					></NextPrevButton>
				</div>
			</div>
		</div>
	);
};
export default TableLoan;
