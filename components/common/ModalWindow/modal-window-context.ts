import { createContext, useContext } from "react";

export interface IModalContextValues {
    isOpen?: boolean
    modalTitle: string
    modalWidthClass?: string
    openModal?: () => void
    closeModal: () => void
    setModalTitle: React.Dispatch<React.SetStateAction<string>>
    setModalWidthClass: React.Dispatch<React.SetStateAction<string>>
}

export const ModalContext = createContext<IModalContextValues | null>(null)

export const useModalContext = () => useContext(ModalContext) as IModalContextValues