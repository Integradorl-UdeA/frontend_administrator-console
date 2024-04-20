import React from 'react';
import TableInventory from '@/components/common/TableInventory';
import { AddButton } from '@/components/common/table/AddButton';
import SearchInput from '@/components/common/table/SearchInput';
import FilterOptions from '@/components/common/table/FilterOptions';
import { HeaderInfoTablePage } from '@/components/common/table/HeaderInfoTablePage';
const options = ['Todos', 'Disponible', 'No disponible'];



const InventoryPage = () => {
	return (
		<div>
			<section className='container px-4 mx-auto'>
				<h1 className='my-8 text-xl font-bold text-green-700'>
					Gestión de inventario
				</h1>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<HeaderInfoTablePage title={"Elementos"} quantity={"6"} text='items activos' description='Estos items se han agregado los últimos 6 meses.'></HeaderInfoTablePage>
					<div className='flex items-center mt-4 gap-x-3'>
						<AddButton text={'Añadir elemento'}></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg rtl:flex-row-reverse">
						<button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm">
							Ver todo
						</button>

						<button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
							Disponible
						</button>

						<button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm hover:bg-gray-100">
							No disponible
						</button>
					</div>
					<SearchInput></SearchInput>
				</div>
				<TableInventory />
			</section>
		</div>
	);
};

export default InventoryPage;
