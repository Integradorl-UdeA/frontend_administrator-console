
import type { IWallet } from "@/types/item-types";

const diego: IWallet = {
	apiKey: 'DIEGO_BOTIA',
	htmlText: 'Diego Botia',
};
const silva: IWallet = {
	apiKey: 'LUIS_SILVA',
	htmlText: 'Luis Silva',
};

export const getWallets = () => [diego, silva];
