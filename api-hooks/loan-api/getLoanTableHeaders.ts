import { useQuery } from '@tanstack/react-query';
import loanTemplate from './loan-template';

export const getLoanTableHeaders = (token: string) => {
	const getLoanTableHeadersQuery = useQuery({
		queryKey: ['loan-table-headers'],
		queryFn: async () => {
			const data: string[] = await (
				await loanTemplate(token).get('/tableHeaders/')
			).data;
			return data;
		},
	});
	return getLoanTableHeadersQuery;
};