export interface ILoanTableInfo {
    loanId: 1
    loanName: string
    loanState: string
    borrowerUser: string
    loanType: string
    loanDate: string
    returnDate: string
}

export interface ILoanPageTableResponse{
    totalPages: number
    currentPage: number 
    items: ILoanTableInfo[]
    totalElements: number
}