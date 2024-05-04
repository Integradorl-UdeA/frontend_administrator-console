import React from 'react'
import type { ICategory } from '@/types/categoryTypes'
import { useInventoryForm } from '@/store/inventoryFormStore'

interface Props{
  category: ICategory
}

const CategoryCard = ({ category }: Props) => {
  const setSelectedCategory = useInventoryForm(state => state.setSelectedCategory) 
  const { categoryName } = category
  return (
    <button onClick={() => {setSelectedCategory(category)}}>
        {categoryName}
    </button>
  )
}

export default CategoryCard