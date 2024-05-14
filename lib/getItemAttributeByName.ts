import type { IItemAttributes } from "@/types/item-types";


export const getItemAttributeByName = (name: string, attributes:IItemAttributes[] | undefined ) =>{
    return attributes?.filter( attr => attr.name === name)[0]
}