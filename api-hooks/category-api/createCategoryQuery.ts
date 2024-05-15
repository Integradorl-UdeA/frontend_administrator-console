import { useMutation } from "@tanstack/react-query"
import getCategoryTemplate from "./category-template";
import type { ICategory } from "@/types/categoryTypes";

export const postCreateCategory = (token: string) => {
    const createCategoryQuery = useMutation({
        mutationKey: ['category'],
        mutationFn: async (category: ICategory) => {
            const data:ICategory = await (await getCategoryTemplate(token).post('' , category)).data
            return data
        }
    })
    return createCategoryQuery
}