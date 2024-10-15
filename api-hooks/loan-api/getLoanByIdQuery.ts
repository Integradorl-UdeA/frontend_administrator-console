import { useQuery } from '@tanstack/react-query';
import loanTemplate from './loan-template';
import type { ILoan } from '@/types/loan-types';

export const getLoanById = (token: string, loanId: number ) => {
	const getLoanByIdQuery = useQuery({
		queryKey: ['loan', loanId],
		queryFn: async () => {
			const data: ILoan = await (
				await loanTemplate(token).get(`/${loanId}`)
			).data;
			return data;
		},
		enabled: !(loanId === 0)
	});
	return getLoanByIdQuery;
};