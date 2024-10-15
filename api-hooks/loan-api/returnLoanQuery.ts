import { useMutation, useQueryClient } from '@tanstack/react-query';
import returnLoanTemplate from './return-loan-template';
import type { IReturnLoanPost } from '@/types/loan-types';

export const returnLoan = (token: string) => {
    const queryClient = useQueryClient() 
	const returnLoanMutation = useMutation({
		mutationKey: ['loan'],
		mutationFn: async (loanReturn: IReturnLoanPost) => {
			const data = await (
				await returnLoanTemplate(token).post(
					'',
					{},
					{
						params: loanReturn,
					},
				)
			).data;
			return data;
		},
		onSuccess: async () => {
			await queryClient.invalidateQueries({ queryKey: ['loan-per-page'] });
		},
	});
	return returnLoanMutation;
};
