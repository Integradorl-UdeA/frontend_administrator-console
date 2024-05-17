export interface ILoanTableInfo {
	loanId: 1;
	loanName: string;
	loanState: string;
	borrowerUser: string;
	loanType: string;
	loanDate: string;
	returnDate: string;
}

export interface ILoanPageTableResponse {
	totalPages: number;
	currentPage: number;
	items: ILoanTableInfo[];
	totalElements: number;
}

export interface IDTOLoanPost {
	itemId: string;
	quantity: number;
	borrowerUser: string;
	lenderUser: string;
	loanType: string;
	returnDate: string;
	observation: string;
}

export interface ILoan{
    loanId: number
    itemId: string
    quantity: number
    loanType: string
    borrowerUser: string
    lenderUser: string
    loanDate: string
    returnDate: string
    observation: string
    loanState: string
}
