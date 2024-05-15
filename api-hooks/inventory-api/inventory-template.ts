import axios from "axios";

const getInventoryTemplate= (token:string) => {
    const categoryTemplate = axios.create({
        baseURL: 'http://192.168.30.66:8081/api/console-lis/user/inventory/item',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return categoryTemplate
}

export default getInventoryTemplate