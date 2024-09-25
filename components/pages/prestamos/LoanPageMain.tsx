'use client';
import React from 'next';
import TableLoan from '@/components/common/TableLoan';
import { AddButton } from '@/components/common/table/AddButton';
import SearchInput from '@/components/common/table/SearchInput';
import FilterOptions from '@/components/common/table/FilterOptions';
import { HeaderInfoTablePage } from '@/components/common/table/HeaderInfoTablePage';
import { Suspense, useEffect, useState } from 'react';
import LoanFormProvider from '@/components/forms/loan-form/LoanFormProvider';
import ModalWindowProvider from '@/components/common/ModalWindow/ModalWindowProvider';
import LoanFormNavigation from '@/components/forms/loan-form/LoanFormNavigation';
import { useLoanTable } from '@/store/loan-table-store';
import LoanCard from '@/components/Loan/LoanCard';
import type { ILoan } from '@/types/loan-types';
import CloseModal from '@/components/common/ModalWindow/CloseModal';

const options = ['Todos', 'Activo', 'Vencido', 'Devuelto'];

const LoanPageMain = () => {
	const [isOpen, setIsOpen] = useState(false);
	const openModal = () => {
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
	};

	const loanInfoModal = useLoanTable((state) => state.loanInfoModal);
	const setLoanInfoModal = useLoanTable((state) => state.setLoanInfoModal);
	const selectedLoan = useLoanTable((state) => state.selectedLoan);

	useEffect(() => {
		console.log('SE actualizó Selected Loan:', selectedLoan);
	}, [selectedLoan]);

	return (
		<div>
			<section className='container px-4 mx-auto'>
				<h1 className='my-8 text-xl font-bold text-green-700'>
					Gestión de préstamos
				</h1>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<HeaderInfoTablePage
						title={'Préstamos'}
						quantity={'6'}
						text='préstamos activos'
						description='Estos préstamos se han realizado en los últimos 6 meses.'
					></HeaderInfoTablePage>
					<div className='flex item s-center mt-4 gap-x-3'>
						<AddButton
							onClick={() => {
								openModal();
							}}
							text={'Añadir préstamo'}
						></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<FilterOptions options={options}></FilterOptions>
					<SearchInput></SearchInput>
				</div>
				<Suspense fallback={<p>Cargando Tabla...</p>}>
					<TableLoan />
				</Suspense>
				{isOpen && (
					<ModalWindowProvider
						closeModal={closeModal}
						title='Realizar un préstamo'
					>
						<LoanFormProvider>
							<LoanFormNavigation />
						</LoanFormProvider>
					</ModalWindowProvider>
				)}
				{loanInfoModal && (
					<ModalWindowProvider
						closeModal={() => {
							setLoanInfoModal(false);
						}}
						title='Préstamo'
					>
						{selectedLoan !== null && <LoanCard loan={selectedLoan} />}
					</ModalWindowProvider>
				)}
			</section>
		</div>
	);
};

export default LoanPageMain;
