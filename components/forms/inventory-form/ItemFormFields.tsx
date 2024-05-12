import InputSwitch from '@/components/common/InputSwitch';
import { getItemAttributeByName } from '@/lib/getItemAttributeByName';
import { getWallets } from '@/services/item-service/wallet-service';
import { useInventoryForm } from '@/store/inventoryFormStore';
import type { IItem} from '@/types/item-types';
import React from 'react';
import type { Control, FieldValues, UseFormRegister } from 'react-hook-form';

interface UseFormProps {
	control: Control<FieldValues, any>;
	register: UseFormRegister<FieldValues>;
	defaultItem?: IItem;
	type: 'READONLY' | 'CREATE' | 'EDIT';
}

const ItemFormFields = ({
	control,
	register,
	defaultItem,
	type,
}: UseFormProps) => {
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);
	const { attributes, listAttributes, idItemField, quantizable, categoryName } =
		selectedCategory;
	const hasDefaultItem = type === 'READONLY' || type === 'EDIT';
	
	

	return (
		<>
			<p>Crear un {categoryName}</p>

			<InputSwitch
				control={control}
				label='Prestable'
				name='lendable'
				defaultVal={hasDefaultItem ? defaultItem?.lendable : false}
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
						defaultValue={categoryName}
						disabled
						placeholder={categoryName}
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
						defaultValue={hasDefaultItem ? `${defaultItem?.itemId}` : ''}
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
				defaultValue={hasDefaultItem ? `${defaultItem?.wallet}` : ''}
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
						defaultValue={
							hasDefaultItem
								? `${getItemAttributeByName(attr, defaultItem?.attributes)
										?.value}`
								: ''
						}
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
						defaultValue={
							hasDefaultItem
								? `${getItemAttributeByName(attr.name, defaultItem?.attributes)
										?.value}`
								: ''
						}
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
