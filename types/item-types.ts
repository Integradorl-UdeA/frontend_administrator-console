export interface IWallet{
    apiKey: string
    htmlText: string
} 

export interface IItem{
    itemId: string
    categoryId: number
    wallet: string
    lendable: boolean
    state: string
    quantity: number | undefined
    attributes: IItemAttributes[]
    total?:number
}

export interface IItemAttributes{
    name: string
    value: string
}

export interface IItemFormData{
    itemId: string
    categoryId: number
    wallet: string
    lendable: boolean
    quantity?: 0
    attributes: Record<string, string>
}

export interface IItemTableResponse{
    id: string
    state: string
    category: string
    wallet: string
    attributes: string[]
    quantizable: boolean
}

export interface IItemPerPageResponse{
	totalPages: number
	currentPage: number
	items: IItemTableResponse[]
	totalElements: number

}