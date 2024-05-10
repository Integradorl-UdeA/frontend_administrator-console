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
    quantity: number
    attributes: IItemAttributes[]
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
    attributes: Record<string, string>
}