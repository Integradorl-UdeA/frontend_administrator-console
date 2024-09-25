import axios from "axios";

const returnLoanTemplate= (token:string) => {
    const axiosTemplate = axios.create({
        baseURL: `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/returnLoan`,
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return axiosTemplate
}

export default returnLoanTemplate
