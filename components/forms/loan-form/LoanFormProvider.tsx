import { getCurrentDate } from '@/lib/getCurrentDate';
import type { IDTOLoanPost } from '@/types/loan-types';
import React, { type ReactNode } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

interface Props {
	children: ReactNode;
}
const defaultValue: IDTOLoanPost = {
	itemId: '',
	borrowerUser: '',
	lenderUser: '',
	loanType: 'GENERAL',
	observation: '',
	quantity: 0,
	returnDate: getCurrentDate(),
};

const LoanFormProvider = ({children}: Props) => {
	const methods = useForm({defaultValues: defaultValue});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default LoanFormProvider;
