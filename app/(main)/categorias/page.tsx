'use client';
import { AddButton } from '@/components/common/table/AddButton';
import { HeaderInfoTablePage } from '@/components/common/table/HeaderInfoTablePage';
import SearchInput from '@/components/common/table/SearchInput';
import React, { useState } from 'react';
import FilterOptions from '@/components/common/table/FilterOptions';
import CategoryForm from '@/components/forms/CategoryForm/CategoryForm';
import CategoryFormProvider from '@/components/forms/CategoryForm/CategoryFormProvider';
import TableCategory from '@/components/common/TableCategory';
import ModalWindowProvider from '@/components/common/ModalWindow/ModalWindowProvider';
const options = ['Cuantificable', 'No cuantificable'];

const CategoriesPage = () => {
	const [modalCreateCategory, setModalCreateCategory] = useState(false);

	const openModal = () => {
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
						<AddButton
							onClick={openModal}
							text={'Añadir categoría'}
						></AddButton>
					</div>
				</div>
				<div className='mt-6 md:flex md:items-center md:justify-between'>
					<FilterOptions options={options}></FilterOptions>
					<SearchInput></SearchInput>
				</div>
				<TableCategory />
			</section>

			{modalCreateCategory && (
				<ModalWindowProvider
					title='Crear nuevo elemento del inventario'
					closeModal={closeModal}
					widthClass='w-fit'
				>
					<CategoryFormProvider>
						<CategoryForm />
					</CategoryFormProvider>
				</ModalWindowProvider>
			)}
		</div>
	);
};

export default CategoriesPage;
