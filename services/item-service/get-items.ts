import type { IItem } from "@/types/item-types";

const items:IItem[] = [
    {
        itemId: "Computador",
        categoryId: 1,
        lendable: false,
        quantity: 1,
        state: "AVAILABLE",
        wallet: "DIEGO_BOTIA",
        attributes:[
            {
                name: "Mac",
                value: "Una macsita"
            },
            {
                name: "Sala",
                value: "Sala 1"
            },
            {
                name: "Marca",
                value: "ASUS"
            }
        ]

    },
    {
        itemId: "cableHDMI",
        categoryId: 2,
        lendable: true,
        quantity: 10,
        state: "AVAILABLE",
        wallet: "LUIS_SILVA",
        attributes:[
            {
                name: "Categoría",
                value: "6"
            },
            {
                name: "Longitud",
                value: "Chitito"
            }
        ]
    }
]

export const getItemById = (id:string) => {
    return items.filter(item => item.itemId === id)[0]
}