import React, { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ItemFormFields from './ItemFormFields';
import type { IItem } from '@/types/item-types';
import { useSession } from 'next-auth/react';
import { getItemById } from '@/api-hooks/inventory-api/getItemByIdQuery';
import { useInventoryForm } from '@/store/inventoryFormStore';

const QuantizableItemForm = () => {
	// TODO Make this an API call
	const [itemExist, setItemExist] = useState(false);
    const {categoryName} = useInventoryForm(state => state.selectedCategory)

	const token = useSession().data?.token?.token
	const {data: item, isLoading, error} = getItemById(token as string, "string")
	console.log("Item exist: " , itemExist)
	console.log("Item: ", item)
	console.log("Error: ", error)
	const { register } = useFormContext();
	useEffect(() => {
		setItemExist(item !== undefined)
	}, [item])
	if(isLoading) return <p>Is Loading...</p>
	return (
		<form>
			{itemExist ? (
				<>
					<p>El item existe</p>
					<ItemFormFields type='READONLY' defaultItem={item} />
					<div className='flex items-center my-4'>
						<label className='mr-5' htmlFor='name'>
							Cantidad a agregar:
						</label>
						<input
							type='number'
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('quantity', {
								required: {
									value: true,
									message: 'Debe llenar el campo',
								},
							})}
						/>
					</div>
				</>
			) : (
				<>
					<ItemFormFields type='CREATE' />
					<div className='flex items-center my-4'>
						<label className='mr-5' htmlFor='name'>
							Cantidad a agregar:
						</label>
						<input
							type='number'
							className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
							{...register('quantity', {
								required: {
									value: true,
									message: 'Debe llenar el campo',
								},
							})}
						/>
					</div>
				</>
			)}
		</form>
	);
};

export default QuantizableItemForm;
