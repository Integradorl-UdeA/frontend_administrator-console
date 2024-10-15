import { useSession } from "next-auth/react"

export const getSessionToken = () => {
    return useSession().data?.token?.token as string
}