import { useQuery } from "@tanstack/react-query"
import getCategoryTemplate from "./category-template";
import type { ICategory } from "@/types/categoryTypes";



export const getAllCategories = (token: string) => {
    const getAllCategoriesQuery = useQuery({
        queryKey: ['category'],
        queryFn: async () => {
            const data:ICategory[] = await (await getCategoryTemplate(token).get('')).data
            return data
        }
    })
    return getAllCategoriesQuery
}