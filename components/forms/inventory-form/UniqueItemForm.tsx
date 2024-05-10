import InputSwitch from '@/components/common/InputSwitch';
import { useInventoryForm } from '@/store/inventoryFormStore';
import React from 'react';
import type { Control, FieldValues, UseFormRegister } from 'react-hook-form';
import { getWallets } from '@/services/item-service/wallet-service';

interface useFormProps {
	control: Control<FieldValues, any>;
	register: UseFormRegister<FieldValues>;
}

const UniqueItemForm = ({ control, register }: useFormProps) => {
	const { attributes, listAttributes, idItemField } = useInventoryForm(
		(state) => state.selectedCategory,
	);

	return (
		<form>
			<InputSwitch control={control} label='Prestable' name='lendable' />
			<div className='flex items-center my-4'>
				<label className='mr-5' htmlFor='name'>
					{idItemField}:{' '}
				</label>
				<input
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
			<div className='flex items-center my-4'>
				<label className='mr-5' htmlFor='billetera'>
					Billetera
				</label>
				<select defaultValue={""}
						className='w-full rounded-lg py-2 px-3 text-base focus:outline-greenTwo'
						{...register('wallet', {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					>
						<option value="" disabled hidden>Seleccione</option>
					{
						getWallets().map( (wallet, key) => (
							<option value={wallet.apiKey} key={wallet.apiKey}>
								{wallet.htmlText}
							</option>
						))
					}
				</select>
			</div>
			{attributes.map((attr, index) => (
				<div key={attr + index} className='flex items-center my-4'>
					<label className='mr-5' htmlFor='name'>
						{attr}:{' '}
					</label>
					<input
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
						className='w-full rounded-lg py-2 px-3 text-base focus:outline-greenTwo'
						{...register(`attributes.${attr.name}`, {
							required: {
								value: true,
								message: 'Debe llenar el campo',
							},
						})}
					>
						{attr.list.map((listItem: string, i) => (
							<option value={listItem} key={i}>
								{listItem}
							</option>
						))}
					</select>
				</div>
			))}
		</form>
	);
};

export default UniqueItemForm;
