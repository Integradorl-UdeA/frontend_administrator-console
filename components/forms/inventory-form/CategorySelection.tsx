import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import { getAllCategories } from '@/services/category-services/category-getters';
import { useInventoryForm } from '@/store/inventoryFormStore';
import type { ICategory } from '@/types/categoryTypes';

const CategorySelection = () => {
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);
	console.log(selectedCategory);
	const { categoryName, quantizable, attributes, listAttributes } =
		selectedCategory;
	const [allCategories, setAllCategories] = useState<ICategory[]>([]);
	useEffect(() => {
		setAllCategories(getAllCategories());
	}, []);

	return (
		<div className='flex'>
			{allCategories.map((cat) => (
				<CategoryCard key={cat.id} category={cat} />
			))}
			<div>
				<p>Nombre: {categoryName}</p>
				<p>Cuantificable: {quantizable ? 'Sí' : 'No'}</p>
				<p>Atributos: {attributes}</p>
				<div>
					Atributos lista:{' '}
					{listAttributes.map((attr, index) => (
						<p key={index}>
							Nombre: {attr.name}, Valores:{attr.list}
						</p>
					))}
				</div>
				<p></p>
			</div>
		</div>
	);
};

export default CategorySelection;
