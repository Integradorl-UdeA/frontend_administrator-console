import { getWallets } from "@/services/item-service/wallet-service"

export const getWalletById = (walletId: string | undefined) =>{
    return getWallets().filter( item => item.apiKey === walletId )[0]
}