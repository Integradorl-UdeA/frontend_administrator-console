import { useQuery } from '@tanstack/react-query';
import getInventoryTemplate from './inventory-template';
import type {  IItemPerPageResponse } from '@/types/item-types';

export const getItemsPerPage = (token: string, page: number) => {
	const getItemsPerPageQuery = useQuery({
		queryKey: ['items-per-page'],
		queryFn: async () => {
			const data: IItemPerPageResponse = await (
				await getInventoryTemplate(token).get('/tableRegisters', {
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
	return getItemsPerPageQuery;
};
