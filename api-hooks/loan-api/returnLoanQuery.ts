import { useMutation } from "@tanstack/react-query"
import returnLoanTemplate from "./return-loan-template";
import type { ILoan } from "@/types/loan-types";

export const returnLoan = (token: string, loanId:string) => {
    const returnLoanMutation = useMutation({
        mutationKey: ['loan'],
        mutationFn: async (loanId: string) => {
            const data = await (await returnLoanTemplate(token).post('' , loanId)).data
            return data
        }
    })
    return returnLoanMutation
}