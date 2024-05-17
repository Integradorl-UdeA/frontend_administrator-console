import { useQuery } from '@tanstack/react-query';
import loanTemplate from './loan-template';

export const getLoanPerPage = (token: string, page: number) => {
	const getLoanPerPageQuery = useQuery({
		queryKey: ['loan-per-page'],
		queryFn: async () => {
			const data = await (
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

