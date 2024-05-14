import axios from "axios";

const getCategoryTemplate= (token:string) => {
    const categoryTemplate = axios.create({
        baseURL: 'http://192.168.30.66:8081/api/console-lis/user/category',
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return categoryTemplate
}

export default getCategoryTemplate
