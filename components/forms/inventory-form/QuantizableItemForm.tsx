import React, { useState } from 'react';
import { useFormContext } from 'react-hook-form';
import ItemFormFields from './ItemFormFields';
import type { IItem } from '@/types/item-types';
import { getItemById } from '@/services/item-service/get-items';

const QuantizableItemForm = () => {
	const [itemExist, setItemExist] = useState(true);
	const { register } = useFormContext();

	const item: IItem = getItemById('cableHDMI');

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
