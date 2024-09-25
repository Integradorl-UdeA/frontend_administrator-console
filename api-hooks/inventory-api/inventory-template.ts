import axios from "axios";

const inventoryTemplate= (token:string) => {
    const inventoryTemplate = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/inventory/item`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return inventoryTemplate
}

export default inventoryTemplate