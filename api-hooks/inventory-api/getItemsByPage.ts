import { useQuery } from '@tanstack/react-query';
import getInventoryTemplate from './inventory-template';
import type { IItem } from '@/types/item-types';

export const getItemsByPage = (token: string) => {
	const getItemsByPageQuery = useQuery({
		queryKey: ['item'],
		queryFn: async () => {
			const data: IItem[] = await (
				await getInventoryTemplate(token).get('/tableRegisters', {
					params: {
						page: 0,
						size: 10,
					},
				})
			).data;
			return data;
		},
	});
	return getItemsByPageQuery;
};
