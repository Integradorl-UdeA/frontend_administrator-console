import type { IReturnLoanPost } from '@/types/loan-types';
import { useSession } from 'next-auth/react';
import React, { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
	children: ReactNode;
}
const ReturnLoanFormProvider = ({ children }: Props) => {
	const lenderUser = useSession().data?.user.username;
	const defaultData: IReturnLoanPost = {
		loanId: -1,
		lenderUser: lenderUser as string,
		observation: '',
	};

	const methods = useForm({defaultValues: defaultData});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ReturnLoanFormProvider;
