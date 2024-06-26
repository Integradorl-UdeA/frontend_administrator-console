import type { IAdditionalAttr, IListAttr } from '@/types/categoryTypes';
import { create } from 'zustand';

interface IState {
	additionalAttr: IAdditionalAttr;
	formFieldStatus: 0 | 1 | 2 | 3 | 4;
	editingAttribute: null | string | IListAttr;
	setEditingAttribute: (value: null | string | IListAttr) => void;
	setFormFieldStatus: (status: 0 | 1 | 2 | 3 | 4) => void;
	addAttribute: (attribute: string) => void;
	addListAttribute: (listAttr: IListAttr) => void;
	deleteAttribute: (attrName: string) => void;
	editTextAttribute: (txtAttr: string) => void;
	editListAttribute: (listAttr: IListAttr) => void;
	isValidSameNameTextAttr: (attrName: string) => boolean
	isValidSameNameListAttr: (attrName: string) => boolean
	isValidSameNameAttr: (attrName: string) => boolean
	clearAdditionalAttr: () => void
	clearEditingAttr: () => void
}
const defaultAdditionalAttr: IAdditionalAttr = {
	attributes: [],
	listAttributes: [],
};

const defaultEditingAttribute: null |string | IListAttr = ''

export const useCategoryForm = create<IState>((set, get) => {
	return {
		additionalAttr: defaultAdditionalAttr,
		formFieldStatus: 0,
		editingAttribute: null,
		setEditingAttribute: (value) => {
			set((state) => ({
				...state,
				editingAttribute: value,
			}));
		},

		setFormFieldStatus: (status: 0 | 1 | 2 | 3 | 4) => {
			set((state) => ({
				...state,
				formFieldStatus: status,
			}));
		},

		addAttribute: (attribute: string) => {
			set((state) => ({
				...state,
				additionalAttr: {
					...state.additionalAttr,
					attributes: [...state.additionalAttr.attributes, attribute],
				},
			}));
		},

		addListAttribute: (listAttr: IListAttr) => {
			set((state) => ({
				...state,
				additionalAttr: {
					...state.additionalAttr,
					listAttributes: [
						...state.additionalAttr.listAttributes,
						{ name: listAttr.name, list: listAttr.list },
					],
				},
			}));
		},

		deleteAttribute: (attrName: string) => {
			let isDeleted = false;
			const attributes = get().additionalAttr;
			const updatesAttributes = { ...attributes };
			updatesAttributes.attributes.forEach((item, index) => {
				if (isDeleted) return;
				if (item === attrName) {
					updatesAttributes.attributes.splice(index, 1);
					isDeleted = true;
				}
			});
			if (!isDeleted) {
				updatesAttributes.listAttributes.forEach((item, index) => {
					if (isDeleted) return;
					if (item.name === attrName) {
						updatesAttributes.listAttributes.splice(index, 1);
						isDeleted = true;
					}
				});
			}

			set((state) => ({
				...state,
				additionalAttr: updatesAttributes,
			}));
		},

		editTextAttribute: (txtAttr: string) => {
			const deleteAttribute = get().deleteAttribute;
			const addTextAttribute = get().addAttribute;
			deleteAttribute(get().editingAttribute as string);
			addTextAttribute(txtAttr);
		},

		editListAttribute: (listAttr: IListAttr) => {
			const deleteAttribute = get().deleteAttribute;
			const addListAttribute = get().addListAttribute;
			console.log(get().editingAttribute);
			deleteAttribute((get().editingAttribute as IListAttr).name);
			addListAttribute(listAttr);
		},

		isValidSameNameTextAttr: (attrName: string) => {
			const { attributes: textAttributes } = get().additionalAttr;
			const attrNameLowerCase = attrName.toLowerCase();
			const foundItem = textAttributes.find(
				(attr) => attr.toLowerCase() === attrNameLowerCase,
			);
			return foundItem === undefined ;
		},

		isValidSameNameListAttr: (attrName: string) => {
			const { listAttributes } = get().additionalAttr;
			const attrNameLowerCase = attrName.toLowerCase();
			const foundItem = listAttributes.find(
				(listAttr) => listAttr.name.toLowerCase() === attrNameLowerCase,
			);
			return foundItem === undefined;
		},

		isValidSameNameAttr: (attrName: string) => {
			return (get().isValidSameNameTextAttr(attrName) && get().isValidSameNameListAttr(attrName))
		},

		clearAdditionalAttr: () => {
			set( state => ({
				...state,
				additionalAttr: defaultAdditionalAttr
			}))
		},

		clearEditingAttr: () => {
			set( state => ({
				...state,
				editingAttribute: defaultEditingAttribute
			}))
		}
	};


});
