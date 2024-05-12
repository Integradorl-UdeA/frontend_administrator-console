import InputSwitch from '@/components/common/InputSwitch';
import { useInventoryForm } from '@/store/inventoryFormStore';
import React from 'react';
import type { Control, FieldValues, UseFormRegister } from 'react-hook-form';
import { getWallets } from '@/services/item-service/wallet-service';
import ItemFormFields from './ItemFormFields';
import { IItemFormData } from '@/types/item-types';

interface useFormProps {
	control: Control<FieldValues, any>;
	register: UseFormRegister<FieldValues>;
}

const UniqueItemForm = ({ control, register }: useFormProps) => {

	return (
		<form>
			<ItemFormFields control={control} register={register} type='CREATE'/>
		</form>
	);
};

export default UniqueItemForm;
