import { useQuery } from '@tanstack/react-query';
import getInventoryTemplate from './inventory-template';
import type {  IItemPerPageResponse } from '@/types/item-types';

export const getItemsByPage = (token: string, page: number) => {
	const getItemsByPageQuery = useQuery({
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
	return getItemsByPageQuery;
};
