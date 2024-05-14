'use client'
import { AddButton } from '@/components/common/table/AddButton';
import { HeaderInfoTablePage } from '@/components/common/table/HeaderInfoTablePage';
import SearchInput from '@/components/common/table/SearchInput';
import React, { useState } from 'react';
import FilterOptions from '@/components/common/table/FilterOptions';
import ModalWindow from '@/components/common/ModalWindow';
import CategoryForm from '@/components/forms/CategoryForm/CategoryForm';
import CategoryFormProvider from '@/components/forms/CategoryForm/CategoryFormProvider';
const options = ['Cuantificable', 'No cuantificable'];

const CategoriesPage = () => {
	const [modalCreateCategory, setModalCreateCategory] = useState(false);

	const openModal = () => {
		console.log("Clickeado")
		setModalCreateCategory(true);
	};
	const closeModal = () => {
		setModalCreateCategory(false);
	};
	return (
		<div>
			<section className='container px-4 mx-auto'>
				<h1 className='my-8 text-xl font-bold text-green-700'>
					Gestión de Categorías
				</h1>
				<div className='sm:flex sm:items-center sm:justify-between'>
					<HeaderInfoTablePage
						title={'Categorías'}
						quantity={'6'}
						text='Categorías'
						description='Categorías disponibles'
					></HeaderInfoTablePage>
					<div className='flex items-center mt-4 gap-x-3'>
						<AddButton onClick={openModal} text={'Añadir categoría'}></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<FilterOptions options={options}></FilterOptions>
					<SearchInput></SearchInput>
				</div>
			</section>

			{modalCreateCategory && (
				<ModalWindow
					title='Crear nuevo elemento del inventario'
					close={closeModal}
					widthClass='w-fit'
				>
					<CategoryFormProvider>
						<CategoryForm closeModal={closeModal} />
					</CategoryFormProvider>
				</ModalWindow>
			)}
		</div>
	);
};

export default CategoriesPage
