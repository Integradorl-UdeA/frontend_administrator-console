'use client'
import React, { useState } from 'react';
import TableInventory from '@/components/common/TableInventory';
import { AddButton } from '@/components/common/table/AddButton';
import SearchInput from '@/components/common/table/SearchInput';
import FilterOptions from '@/components/common/table/FilterOptions';
import { HeaderInfoTablePage } from '@/components/common/table/HeaderInfoTablePage';
import ModalWindow from '@/components/common/ModalWindow';
import InventoryForm from '@/components/forms/inventory-form/InventoryForm';
const options = ['Todos', 'Disponible', 'No disponible'];

const InventoryPage = () => {
	const [modalCreateInventory, setModalCreateInventory] = useState(false);

	const openModal = () => {
		setModalCreateInventory(true);
	};
	const closeModal = () => {
		setModalCreateInventory(false);
	};

	return (
		<div>
			<section className='container px-4 mx-auto'>
				<h1 className='my-8 text-xl font-bold text-green-700'>
					Gestión de inventario
				</h1>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<HeaderInfoTablePage
						title={'Elementos'}
						quantity={'6'}
						text='items activos'
						description='Estos items se han agregado los últimos 6 meses.'
					></HeaderInfoTablePage>
					<div className='flex items-center mt-4 gap-x-3'>
						<AddButton onClick={openModal} text={'Añadir elemento'}></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<FilterOptions options={options}></FilterOptions>
					<SearchInput></SearchInput>
				</div>
				<TableInventory />
			</section>

			{modalCreateInventory && (
				<ModalWindow
					title='Crear nuevo elemento del inventario'
					close={closeModal}
				>
					<InventoryForm closeModal={closeModal} />
				</ModalWindow>
			)}
		</div>
	);
};

export default InventoryPage;
