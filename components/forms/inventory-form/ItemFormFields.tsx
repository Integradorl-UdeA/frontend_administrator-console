import InputSwitch from '@/components/common/InputSwitch';
import { ItemApiToFormData } from '@/lib/itemFormToApi';
import { getWallets } from '@/services/item-service/wallet-service';
import { useInventoryForm } from '@/store/inventoryFormStore';
import type { IItem } from '@/types/item-types';
import React from 'react';
import { useFormContext } from 'react-hook-form';

interface UseFormProps {
	defaultItem?: IItem;
	type: 'READONLY' | 'CREATE' | 'EDIT';
}

const ItemFormFields = ({ defaultItem, type }: UseFormProps) => {
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);
	const { attributes, listAttributes, idItemField, quantizable, categoryName } =
		selectedCategory;

	const { register, setValue } = useFormContext();

	const hasDefaultItem = type === 'READONLY' || type === 'EDIT';
	if (hasDefaultItem) {
		// TODO Maybe take this function and move it to the InventoryFormProvider
		const defaultItemFormData = ItemApiToFormData(defaultItem as IItem);
		Object.entries(defaultItemFormData).forEach(([key, value]) => {
			if(key !== 'attributes' && key !== 'categoryId'){
				setValue(key, value)
			}
		});
		Object.entries(defaultItemFormData.attributes).forEach(([key, value]) => {
			setValue(`attributes.${key}`, value)
		})
	}

	if (quantizable) setValue('itemId', categoryName)

	return (
		<>
			<InputSwitch
				label='Prestable'
				name='lendable'
				disabled={type === 'READONLY'}
			/>
			{quantizable ? (
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						Identificador {categoryName}:
					</label>
					<input
						type='text'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						disabled
						{...register('itemId', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
			) : (
				<div className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						{idItemField}:{' '}
					</label>
					<input
						disabled={type === 'READONLY'}
						type='text'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register('itemId', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
			)}
			<select
				disabled={type === 'READONLY'}
				className='w-full rounded-lg py-2 px-3 text-base focus:outline-greenTwo'
				{...register('wallet', {
					required: {
						value: true,
						message: 'Debe llenar el campo',
					},
				})}
			>
				<option value='' disabled hidden>
					Seleccione
				</option>
				{getWallets().map((wall, i) => (
					<option value={wall.apiKey} key={i}>
						{wall.htmlText}
					</option>
				))}
			</select>
			{attributes.map((attr, index) => (
				<div key={attr + index} className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						{attr}:{' '}
					</label>
					<input
						disabled={type === 'READONLY'}
						type='text'
						className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
						{...register(`attributes.${attr}`, {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					/>
				</div>
			))}
			{listAttributes.map((attr, index) => (
				<div key={attr.name + index} className='flex my-4 items-center'>
					<label className='mr-5' htmlFor='name'>
						{attr.name}:{' '}
					</label>
					<select
						disabled={type === 'READONLY'}
						defaultValue=''
						className='w-full rounded-lg py-2 px-3 text-base focus:outline-greenTwo'
						{...register(`attributes.${attr.name}`, {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					>
						<option value='' disabled hidden>
							Seleccione
						</option>
						{attr.list.map((listItem: string, i) => (
							<option value={listItem} key={i}>
								{listItem}
							</option>
						))}
					</select>
				</div>
			))}
		</>
	);
};

export default ItemFormFields;
