import axios from "axios";

const loanTemplate= (token:string) => {
    const axiosTemplate = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/loan`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return axiosTemplate
}

export default loanTemplate
