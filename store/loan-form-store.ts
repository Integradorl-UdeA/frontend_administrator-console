import {create} from 'zustand'

type TFormSection =  0 | 1 | 2;
interface ILoanFormStore{
    formSection: TFormSection 
    setFormSection: (formSection:TFormSection) => void
}
export const useLoanForm = create<ILoanFormStore>( (set) => {
    return{
        formSection: 0,
        setFormSection: (formSection:TFormSection) => {
            set(state => ({
                ...state,
                formSection
            }))
        }
    }
}) 