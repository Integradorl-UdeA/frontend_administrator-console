import { useQuery } from "@tanstack/react-query"
import getInventoryTemplate from "./inventory-template";
import type { IItem } from "@/types/item-types";



export const getAllItems = (token: string) => {
    const getAllItemsQuery = useQuery({
        queryKey: ['item'],
        queryFn: async () => {
            const data:IItem[] = await (await getInventoryTemplate(token).get('')).data
            return data
        }
    })
    return getAllItemsQuery
}