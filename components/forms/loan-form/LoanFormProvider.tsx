import { getCurrentDate } from '@/lib/getCurrentDate';
import type { IDTOLoanPost } from '@/types/loan-types';
import { useSession } from 'next-auth/react';
import React, { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
	children: ReactNode;
}

const LoanFormProvider = ({children}: Props) => {
	const username = useSession().data?.user.username
	
	const defaultValue: IDTOLoanPost = {
		itemId: '',
		borrowerUser: '',
		lenderUser: username as string,
		loanType: 'GENERAL',
		observation: '',
		quantity: 0,
		returnDate: getCurrentDate(),
	};

	const methods = useForm({defaultValues: defaultValue});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default LoanFormProvider;
