import React from 'next';
import TableInventory from '@/components/common/TableInventory';
import { AddButton } from '@/components/common/table/AddButton';
import SearchInput from '@/components/common/table/SearchInput';
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
					<HeaderInfoTablePage title={"Elementos"} quantity={"6"}></HeaderInfoTablePage>
					<div className='flex items-center mt-4 gap-x-3'>
						<AddButton text={'Añadir elemento'}></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
						<button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300">
							Ver todo
						</button>

						<button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
							Disponible
						</button>

						<button className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100">
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
