import type { IItemFormData, IItem } from '@/types/item-types';

export const formUniqueItemToApiReq = (formData: IItemFormData) => {
	const { itemId, attributes, categoryId, lendable, wallet } = formData;

	const quantity = 1;
	const state = 'Disponible'; // TODO ¿Es lendable?
	const objectAttributes = recordAttrToAttrInterface(attributes);

	const apiData: IItem = {
		itemId,
		categoryId,
		lendable,
		quantity,
		state,
		wallet,
		attributes: objectAttributes,
	};

	return apiData;
};

export const ItemApiToFormData = (apiData: IItem) => {
	const {
		itemId,
		categoryId,
		lendable,
		wallet,
		attributes: apiAttributes,
	} = apiData;
	const attributes: Record<string, string> = {};
	apiAttributes.forEach((apiAttr) => {
		attributes[apiAttr.name] = apiAttr.value;
	});

	const formData: IItemFormData = {
		itemId,
		categoryId,
		lendable,
		wallet,
		attributes,
	};

	return formData;
};

export const formCuantiItemToApiPost = (formData: IItemFormData) => {
	const {
		attributes: formDataAttributes,
		categoryId,
		lendable,
		itemId,
		wallet,
		quantity,
	} = formData;
    const state = 'Disponible'
    const attributes = recordAttrToAttrInterface(formDataAttributes)
    const apiData: IItem = {
        attributes,
        categoryId,
        lendable,
        itemId,
        wallet,
        quantity,
        state
    }

    return apiData
};

const recordAttrToAttrInterface = (
	recordAttributes: Record<string, string>,
) => {
	const interfaceAttributes = [];
	for (const [name, value] of Object.entries(recordAttributes)) {
		interfaceAttributes.push({
			name,
			value,
		});
	}
	return interfaceAttributes;
};
