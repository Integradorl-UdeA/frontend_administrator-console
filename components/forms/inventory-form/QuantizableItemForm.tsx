
import React, { useState } from 'react';
import type { Control, FieldValues, UseFormRegister } from 'react-hook-form';
import ItemFormFields from './ItemFormFields';
import type { IItem } from '@/types/item-types';
import { getItemById } from '@/services/item-service/get-items';

interface useFormProps {
	control: Control<FieldValues, any>;
	register: UseFormRegister<FieldValues>
}

const QuantizableItemForm = ({ control, register }: useFormProps) => {
	const [itemExist, setItemExist] = useState(true);

	const item: IItem = getItemById('cableHDMI');

	return (
		<form>
			{itemExist ? (
				<>
					<p>El item existe</p>
					<ItemFormFields
						control={control}
						register={register}
						type='READONLY'
						defaultItem={item}
					/>
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
					<ItemFormFields control={control} register={register} type='CREATE' />
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
