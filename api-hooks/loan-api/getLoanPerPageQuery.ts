import { useQuery } from '@tanstack/react-query';
import loanTemplate from './loan-template';
import type { ILoanPageTableResponse } from '@/types/loan-types';

export const getLoanPerPage = (token: string, page: number) => {
	const getLoanPerPageQuery = useQuery({
		queryKey: ['loan-per-page'],
		queryFn: async () => {
			const data:ILoanPageTableResponse = await (
				await loanTemplate(token).get('/tableRegisters', {
					params: {
						page,
						size: 10,
						sort: []
					},
				})
			).data;
			return data;
		},
	});   
	return getLoanPerPageQuery;
}

