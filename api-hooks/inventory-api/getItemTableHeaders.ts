import { useQuery } from '@tanstack/react-query';
import getInventoryTemplate from './inventory-template';

export const getItemsTableHeaders = (token: string) => {
	const getItemsTanbleHeaderQuery = useQuery({
		queryKey: ['item-table-header'],
		queryFn: async () => {
			const data: string[] = await (
				await getInventoryTemplate(token).get('/tableHeaders/')
			).data;
			return data;
		},
	});
	return getItemsTanbleHeaderQuery;
};
