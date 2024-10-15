import axios from "axios";

const getUserTemplate= (token:string) => {
    const userTemplate = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return userTemplate
}

export default getUserTemplate
