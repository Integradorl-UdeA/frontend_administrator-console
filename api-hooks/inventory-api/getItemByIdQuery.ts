import { useQuery } from "@tanstack/react-query"
import getInventoryTemplate from "./inventory-template";
import type { IItem } from "@/types/item-types";
import { useInventoryForm } from "@/store/inventoryFormStore";



export const getItemById = (token: string, id: string) => {
    const getItemByIdQuery = useQuery({
        queryKey: ['item', id],
        queryFn: async () => {
            const data:IItem = await (await getInventoryTemplate(token).get(`${id}`)).data
            return data
        },
        retry: false
    })
    return getItemByIdQuery
}