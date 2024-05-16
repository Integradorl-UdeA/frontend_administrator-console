import axios from "axios";

const getCategoryTemplate= (token:string) => {
    const categoryTemplate = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/category`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return categoryTemplate
}

export default getCategoryTemplate
