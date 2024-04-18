import React from 'next';
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
					<HeaderInfoTablePage title={"Elementos"} quantity={"6"}></HeaderInfoTablePage>
					<div className='flex items-center mt-4 gap-x-3'>
						<AddButton text={'Añadir elemento'}></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<FilterOptions options={options}></FilterOptions>
					<SearchInput></SearchInput>
				</div>
				<TableInventory/>
			</section>
		</div>
	);
};

export default InventoryPage;
