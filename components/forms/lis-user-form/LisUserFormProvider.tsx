import type { ILisUser } from '@/types/lis-user-types';
import React, { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
	children: ReactNode;
}

const defaultValues:ILisUser = {
    name: '',
    id: '',
    lastname: '',
    username: '',
    role: ''
}
const LisUserFormProvider = ({ children }: Props) => {
	const methods = useForm({defaultValues});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default LisUserFormProvider;
