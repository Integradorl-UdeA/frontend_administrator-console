import type { ICategory } from "@/types/categoryTypes";
import { create } from "zustand";

type TFormState = 0 | 1

interface IInventoryStoreState{
    selectedCategory: ICategory,
    setSelectedCategory: (category: ICategory) => void
    formState: TFormState,
    setFormState: (formState: TFormState) => void
    clearSelectedCategory: () => void
}
const defaultSeletedCategory:ICategory = {
    categoryName: '',
    idItemField: '',
    quantizable: false,
    attributes: [],
    listAttributes: []
}

export const useInventoryForm = create<IInventoryStoreState>( (set) => {
    return {
        selectedCategory: defaultSeletedCategory,
        setSelectedCategory: (category) => {
            set( (state) => ({
                ...state,
                selectedCategory: category
            }))
        },
        clearSelectedCategory: () =>{
            set(state => ({
                ...state,
                selectedCategory: defaultSeletedCategory
            }))
        },

        formState: 0,
        setFormState: (formState) => {
            set((state) => ({
                ...state,
                formState
            }))
        }
    }
})