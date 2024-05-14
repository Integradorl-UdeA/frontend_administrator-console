import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { useInventoryForm } from '@/store/inventoryFormStore';
import type { ICategory } from '@/types/categoryTypes';
import { useSession } from 'next-auth/react';
import { getAllCategories } from '@/api-hooks/category-api/getAllCategoriesQuery';

const CategorySelection = () => {
	console.log('Rerenderizadooooo!!!!');
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);
	const { categoryName, quantizable, attributes, listAttributes } =
		selectedCategory;
	const token = useSession().data?.token.token;
	const { data, isLoading } = getAllCategories(token as string);
	const [allCategories, setAllCategories] = useState<ICategory[]>([]);

	useEffect(() => {
		setAllCategories(data as ICategory[])
	}, [isLoading])


	return (
		<div className='flex '>
			<div className='flex flex-col w-fit p-3 items-center'>
				<h2 className='text-lg font-medium text-textColorOne mb-3'>
					Seleccione la categoría:
				</h2>
				<div className='flex flex-col items-center h-full'>
					{isLoading ? (
						<p>Cargando</p>
					) : (
						allCategories?.map((cat) => (
							<CategoryCard key={cat.id} category={cat} />
						))
					)}
				</div>
			</div>
			<div className='p-3 flex flex-col items-center justify-center'>
				<h2 className='text-lg font-medium text-textColorOne mb-3'>
					Vista previa:
				</h2>
				<div className='bg-greenThree/20 p-3 w-[400px] h-60 flex items-center justify-center rounded-lg'>
					{categoryName === '' ? (
						<p>No ha seleccionado ninguna categoría</p>
					) : (
						<div className='text-textColorOne'>
							<p className='font-bold'>
								Nombre: <span className='font-normal'>{categoryName}</span>
							</p>
							<p className='font-bold'>
								Cuantificable:{' '}
								<span className='font-normal'>{quantizable ? 'Sí' : 'No'}</span>
							</p>
							<div>
								<span className='font-bold'>Atributos: </span>
								<ul className='pl-4'>
									{attributes.length === 0 && listAttributes.length === 0 ? (
										<p>Sin Atributos</p>
									) : (
										<>
											{attributes.map((attr, index) => (
												<li key={index + 'text'}>{attr} - Texto</li>
											))}
											{listAttributes.map((attr, index) => (
												<li key={index + 'list'}>
													{attr.name} - {attr.list.join(', ')}
												</li>
											))}
										</>
									)}
								</ul>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default CategorySelection;
