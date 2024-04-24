import type { IAdditionalAttr, IListAttr } from '@/types/categoryTypes';
import { create } from 'zustand';

interface IState {
	additionalAttr: IAdditionalAttr;
	formFieldStatus: 0 | 1 | 2;
	setFormFieldStatus: (status: 0 | 1 | 2) => void;
	addAttribute: (attribute: string) => void;
	addListAttribute: (listAttr: IListAttr) => void;
}
const defaultAdditionalAttr: IAdditionalAttr = {
	attributes: [],
	listAttributes: [],
};

export const useCategoryForm = create<IState>((set) => {
	return {
		additionalAttr: defaultAdditionalAttr,
		formFieldStatus: 0,

		setFormFieldStatus: (status: 0 | 1 | 2) => {
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
	};
});
