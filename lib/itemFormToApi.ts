import type { IItemFormData, IItem } from '@/types/item-types';

export const formUniqueItemToApiReq = (formData: IItemFormData) => {
	const { itemId, attributes, categoryId, lendable, wallet } =
		formData;
    const quantity = 1
    const state = "AVAILABLE"
    const objectAttributes = recordAttrToAttrInterface(attributes)

    const apiData: IItem = {
        itemId,
        categoryId,
        lendable,
        quantity,
        state,
        wallet,
        attributes: objectAttributes
    }

    return apiData
};

const recordAttrToAttrInterface = (recordAttributes: Record<string, string>) => {
    const interfaceAttributes = []
    for (const [name, value] of Object.entries(recordAttributes)) {
        
        interfaceAttributes.push({
            name,
            value // Capitalizar la primera letra del valor
        });
    }
    return interfaceAttributes
}
