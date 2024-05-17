import { useQuery } from '@tanstack/react-query';
import inventoryTemplate from './inventory-template';

export const getItemsTableHeaders = (token: string) => {
	const getItemsTableHeadersQuery = useQuery({
		queryKey: ['item-table-header'],
		queryFn: async () => {
			const data: string[] = await (
				await inventoryTemplate(token).get('/tableHeaders/')
			).data;
			return data;
		},
	});
	return getItemsTableHeadersQuery;
};
