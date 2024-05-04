export interface IfieldInfo{
    name: string
    list?: string[]
    type: 0 | 1 | 2
}

export interface ICategory{
    id?: number
    categoryName: string
    quantizable: boolean
    attributes: string[]
    listAttributes: IListAttr[]
}

export interface IAdditionalAttr {
	attributes: string[];
	listAttributes: IListAttr[];
}

export interface IListAttr{
    name: string
    list: string[]
}

