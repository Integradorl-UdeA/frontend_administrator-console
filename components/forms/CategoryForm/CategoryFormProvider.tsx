import type { ICategory } from '@/types/categoryTypes';
import React, {  type ReactNode } from 'react';
import { useForm, FormProvider } from 'react-hook-form';

interface Props{
    children: ReactNode
}

const defaultCategoryFormData: ICategory = {
    categoryName: '',
    attributes: [],
    idFieldName: '', // TODO Cambiar el nombre cuando e realicen los cambios en los endpoint
    listAttributes: [],
    quantizable: false
}

const CategoryFormProvider = ({children}: Props) => {
	const methods = useForm({ defaultValues: defaultCategoryFormData});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default CategoryFormProvider;
