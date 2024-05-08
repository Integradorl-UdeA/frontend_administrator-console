import React from 'react';
import type { ICategory } from '@/types/categoryTypes';
import { useInventoryForm } from '@/store/inventoryFormStore';

interface Props {
	category: ICategory;
}

const CategoryCard = ({ category }: Props) => {
	const setSelectedCategory = useInventoryForm(
		(state) => state.setSelectedCategory,
	);
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);

	const toggleSelectedCategory = () => {
		if (selectedCategory.id === category.id) {
			setSelectedCategory({
				categoryName: '',
				quantizable: true,
				attributes: [],
				listAttributes: [],
			});
		}
		else{
			setSelectedCategory(category)
		}
	};

	const isActive = selectedCategory.id === category.id;
	const activeStyles = 'text-white font-medium bg-greenFour';
	const inactiveStyles =
		'border  border-greenOne text-greenOne hover:bg-greenTwo/20';
	const { categoryName } = category;
	return (
		<button
			className={`px-2 py-1 my-1 rounded-lg w-40 ${
				isActive ? activeStyles : inactiveStyles
			}`}
			onClick={() => {
				toggleSelectedCategory();
			}}
		>
			{categoryName}
		</button>
	);
};

export default CategoryCard;
