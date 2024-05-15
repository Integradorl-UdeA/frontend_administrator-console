import { useState, useEffect } from 'react';
import getCategoryTemplate from './category-template';
import type { ICategory } from '@/types/categoryTypes';

export const useGetCategories = (token: string) => {
	const [isLoading, setIsLoading] = useState(true);
	const [categories, setCategories] = useState<ICategory[]>();

	useEffect(() => {
		async function fetchData() {
			const data: ICategory[] = await (await getCategoryTemplate(token)('')).data;
			setIsLoading(false)
            setCategories(data)
		}
		fetchData().catch(console.error);
	}, []);

	return { isLoading, categories };
};
