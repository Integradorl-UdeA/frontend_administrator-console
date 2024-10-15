import { useQuery } from "@tanstack/react-query";
import getUserTemplate from "./user-template";

export const getUserExist = (token: string, user:string) => {
    const getUserExistQuery = useQuery({
        queryKey: ['user-lis', user],
        queryFn: async () => {
            const data:{exist: boolean} = await (await getUserTemplate(token).get(`/existUser/${user}`)).data
            return data
        },
        enabled: false,
        retry: false 
    })
    return getUserExistQuery
}