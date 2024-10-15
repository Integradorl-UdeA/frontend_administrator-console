import type { ILoan } from "@/types/loan-types";
import { create } from "zustand";

interface ILoanStore{
    selectedLoanId: number  
    setSelectedLoanId: (loanId: number) => void
    selectedLoan: ILoan | null
    setSelectedLoan: (loan: ILoan) => void
    loanInfoModal: boolean
    setLoanInfoModal: (showModal: boolean) => void
    returnLoanModal: boolean
    setReturnLoanModal: (showModal: boolean) => void    
}

export const useLoanTable = create<ILoanStore>( (set) => {
    return ({
        selectedLoanId: 0,
        setSelectedLoanId: (loanId: number) => {
            set( state => ({
                ...state,
                selectedLoanId: loanId
            }))
        },

        selectedLoan: null,
        setSelectedLoan: (loan: ILoan) => {
            set (state => ({
                ...state,
                selectedLoan: loan

            }))
        },

        loanInfoModal: false,
        setLoanInfoModal: (showModal: boolean) => {
            set(state => (
                {
                    ...state,
                    loanInfoModal: showModal
                }
            ))
        },

        returnLoanModal: false,
        setReturnLoanModal: (showModal: boolean) => {
            set(state => (
                {
                    ...state,
                    returnLoanModal: showModal
                }
            ))
        }
    })
})  