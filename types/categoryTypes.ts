export interface IfieldInfo{
    name: string
    list?: string[]
    type: 0 | 1 | 2
}

export interface ICategory{
    categoryName: string
    quantizable: string
    attributes: string[]
    listAttributes: IListAttribute[]
}

export interface IListAttribute{
    name: string
    values: string[]
}

