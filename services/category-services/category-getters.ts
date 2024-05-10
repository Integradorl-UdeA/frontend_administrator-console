import type { ICategory } from "@/types/categoryTypes";

const categories:ICategory[] = [
    {
        id: 1,
        idItemField: "Id del inventario",
        categoryName: "Computador",
        quantizable: false,
        attributes: ["Mac"],
        listAttributes:[
            {
                name: "Marca",
                list: ["Lenovo", "HP", "ASUS"] 
            },
            {
                name: "Sala",
                list: ["Sala 1", "Sala 2", "Sala 3" , "Sala 4","Telemática", "MovilIS" ]
            },
        ]
    },
    {
        id: 3,
        categoryName: "Cable HDMI",
        idItemField: "Cable_HDMI",
        quantizable: true,
        attributes: [],
        listAttributes: []
    },
    {
        id:4,
        categoryName: "Cable HDMI",
        idItemField: "Cable HDMI",
        quantizable: true,
        attributes: [],
        listAttributes: []
    },
    {
        id: 5,
        categoryName: "Cable HDMI",
        idItemField: "Cable HDMI",
        quantizable: true,
        attributes: [],
        listAttributes: []
    },
    {
        id: 6,
        categoryName: "Cable HDMI",
        idItemField: "Cable HDMI",
        quantizable: true,
        attributes: [],
        listAttributes: []
    }
]

export const getAllCategories = () => categories

