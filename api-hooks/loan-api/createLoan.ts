import { useMutation, useQueryClient } from "@tanstack/react-query"
import getLoanTemplate from "./loan-template";
import type { IDTOLoanPost } from "@/types/loan-types";

export const createLoan = (token: string) => {
    const queryClient = useQueryClient();
    const createLoanMutation = useMutation({
        mutationKey: ['loan'],
        mutationFn: async (loan: IDTOLoanPost) => {
            const data:IDTOLoanPost = await (await getLoanTemplate(token).post('' , loan)).data
            return data
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({queryKey: ['loan']})
            await queryClient.invalidateQueries({queryKey: ['loan-per-page']})
        }
    })
    return createLoanMutation
}