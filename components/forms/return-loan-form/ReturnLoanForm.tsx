import CloseModal from '@/components/common/ModalWindow/CloseModal';
import React from 'react';

interface Props {
	loanId: number;
}
const ReturnLoanForm = ({ loanId }: Props) => {
	return (
		<>
			<CloseModal />
			<form>{loanId}</form>
		</>
	);
};

export default ReturnLoanForm;
