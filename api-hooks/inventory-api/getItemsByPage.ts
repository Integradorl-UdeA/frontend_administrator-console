import { useQuery } from '@tanstack/react-query';
import getInventoryTemplate from './inventory-template';
import type { IItemTableResponse } from '@/types/item-types';

interface IItemPerPageResponse{
	totalPages: number
	currentPage: number
	items: IItemTableResponse[]
	totalElements: number

}
export const getItemsByPage = (token: string) => {
	const getItemsByPageQuery = useQuery({
		queryKey: ['item'],
		queryFn: async () => {
			const data: IItemPerPageResponse = await (
				await getInventoryTemplate(token).get('/tableRegisters', {
					params: {
						page: 0,
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
