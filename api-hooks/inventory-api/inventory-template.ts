import axios from "axios";

const inventoryTemplate= (token:string) => {
    const categoryTemplate = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/inventory/item`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return categoryTemplate
}

export default inventoryTemplate