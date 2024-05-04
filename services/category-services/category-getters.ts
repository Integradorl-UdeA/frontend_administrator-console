import type { ICategory } from "@/types/categoryTypes";

const categories:ICategory[] = [
    {
        id: 1,
        categoryName: "Computador",
        quantizable: false,
        attributes: ["Mac" , "InventoryID"],
        listAttributes:[
            {
                name: "Marca",
                list: ["Lenovo", "HP", "ASUS"] 
            }
        ]
    },
    {
        id: 2,
        categoryName: "Cable HDMI",
        quantizable: true,
        attributes: [],
        listAttributes: []
    }
]

export const getAllCategories = () => categories

