'use client'
import React from 'next';
import TableLoan from '@/components/common/TableLoan';
import { AddButton } from '@/components/common/table/AddButton';
import SearchInput from '@/components/common/table/SearchInput';
import FilterOptions from '@/components/common/table/FilterOptions';
import { HeaderInfoTablePage } from '@/components/common/table/HeaderInfoTablePage';
const options = ['Todos', 'Activo', 'Vencido', 'Devuelto'];

const LoanPage = () => {
	return (
		<div>
			<section className='container px-4 mx-auto'>
				<h1 className='my-8 text-xl font-bold text-green-700'>
					Gestión de préstamos
				</h1>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<HeaderInfoTablePage title={"Préstamos"} quantity={"6"} text='préstamos activos' description='Estos préstamos se han realizado en los últimos 6 meses.'></HeaderInfoTablePage>
					<div className='flex item s-center mt-4 gap-x-3'>
						<AddButton onClick={() => {}} text={'Añadir préstamo'}></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<FilterOptions options={options}></FilterOptions>
					<SearchInput></SearchInput>
				</div>
				<TableLoan />
			</section>
		</div>
	);
};

export default LoanPage;