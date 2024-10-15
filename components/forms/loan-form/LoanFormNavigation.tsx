import { useLoanForm } from '@/store/loan-form-store'
import React from 'react'
import BorrowerSelection from './BorrowerSelection';
import LendedItemSelection from './LendedItemSelection';
import LisUserFormProvider from '../lis-user-form/LisUserFormProvider';
import LisUserFormOnLoan from '../lis-user-form/LisUserFormOnLoan';
import LoanForm from './LoanForm';

const LoanFormNavigation = () => {
    const formSection = useLoanForm(state => state.formSection)

    if (formSection === 0) return <BorrowerSelection />;
    if (formSection === 1) return <LoanForm/>
	if (formSection === 2) return <LendedItemSelection />;
	if (formSection === 3)
		return (
			<LisUserFormProvider>
				<LisUserFormOnLoan />
			</LisUserFormProvider>
		);
}

export default LoanFormNavigation