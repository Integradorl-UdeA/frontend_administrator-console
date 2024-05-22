import {create} from 'zustand'

type TFormSection =  0 | 1 | 2 | 3;
interface ILoanFormStore{
    formSection: TFormSection 
    setFormSection: (formSection:TFormSection) => void
    selectedItemId: string
    setSelectedItemId: (id: string) => void
}
export const useLoanForm = create<ILoanFormStore>( (set) => {
    return{
        formSection: 0,
        setFormSection: (formSection:TFormSection) => {
            set(state => ({
                ...state,
                formSection
            }))
        },
        
        selectedItemId: "",
        setSelectedItemId: (id:string) => {
            set(state => ({
                ...state,
                selectedItemId: id
            }))
        }
    }
}) 