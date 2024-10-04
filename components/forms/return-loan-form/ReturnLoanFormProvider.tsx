import { useLoanTable } from '@/store/loan-table-store';
import type { IReturnLoanPost } from '@/types/loan-types';
import { useSession } from 'next-auth/react';
import React, { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
	children: ReactNode;
}
const ReturnLoanFormProvider = ({ children }: Props) => {
	const lenderUser = useSession().data?.user.username;
	const loanId = useLoanTable(state => state.selectedLoanId)
	
	const defaultData: IReturnLoanPost = {
		loanId,
		lenderUser: lenderUser as string,
		observation: '',
	};

	const methods = useForm({defaultValues: defaultData});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default ReturnLoanFormProvider;
