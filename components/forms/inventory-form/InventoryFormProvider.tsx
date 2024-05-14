import type { IItemFormData } from '@/types/item-types';
import React, { type ReactNode } from 'react';
import { type FieldValues, FormProvider, useForm } from 'react-hook-form';

interface Props {
	children: ReactNode;
}

const defaultItem: IItemFormData = {
	attributes: {},
	categoryId: -1,
	wallet: '',
	itemId: '',
	lendable: false,
	quantity: 0,
};

const InventoryFormProvider = ({ children }: Props) => {
	const methods = useForm({defaultValues: defaultItem as FieldValues});

	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default InventoryFormProvider;
