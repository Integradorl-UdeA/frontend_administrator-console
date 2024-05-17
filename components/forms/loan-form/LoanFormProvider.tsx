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
	loanType: '',
	observation: '',
	quantity: 0,
	returnDate: '',
};

const LoanFormProvider = ({children}: Props) => {
	const methods = useForm({defaultValues: defaultValue});
	return <FormProvider {...methods}>{children}</FormProvider>;
};

export default LoanFormProvider;
