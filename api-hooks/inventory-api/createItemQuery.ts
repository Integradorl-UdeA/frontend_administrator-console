import { useMutation } from "@tanstack/react-query"
import getInventoryTemplate from "./inventory-template";
import type { IItem } from "@/types/item-types";



export const postCreateItem = (token: string) => {
    const createItemQuery = useMutation({
        mutationKey: ['item'],
        mutationFn: async (item: IItem) => {
            const data:IItem[] = await (await getInventoryTemplate(token).post('' , item)).data
            return data
        }
    })
    return createItemQuery
}