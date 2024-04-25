import type { IAdditionalAttr, IListAttr } from '@/types/categoryTypes';
import { create } from 'zustand';

interface IState {
	additionalAttr: IAdditionalAttr;
	formFieldStatus: 0 | 1 | 2;
	setFormFieldStatus: (status: 0 | 1 | 2) => void;
	addAttribute: (attribute: string) => void;
	addListAttribute: (listAttr: IListAttr) => void;
	deleteAttribute: (attrName: string) => void
}
const defaultAdditionalAttr: IAdditionalAttr = {
	attributes: ["hola", "chao","coma"],
	listAttributes: [],
};

export const useCategoryForm = create<IState>((set, get) => {
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

		deleteAttribute: (attrName: string) => {
			let isDeleted = false
			const attributes  = get().additionalAttr
			const updatesAttributes = {...attributes}
			updatesAttributes.attributes.forEach( (item, index) => {
				if(isDeleted) return
				if(item === attrName){
					updatesAttributes.attributes.splice(index, 1)
					isDeleted = true
				} 
			} )
			if(!isDeleted){
				updatesAttributes.listAttributes.forEach( (item, index) => {
					if(isDeleted) return
					if(item.name === attrName){
						updatesAttributes.listAttributes.splice(index, 1)
						isDeleted = true
					} 
				} )
			}

			set((state) => ({
				...state,
				additionalAttr: updatesAttributes,
			}));

			console.log(get().additionalAttr)
			
		}
	};
});
