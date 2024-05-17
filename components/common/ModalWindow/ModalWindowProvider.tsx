import React, { useState, type ReactNode } from 'react';
import { ModalContext } from './modal-window-context';
import ModalWindow from './ModalWindow';

interface Props {
	children: ReactNode;
	isOpen?: boolean;
	openModal?: () => void;
	closeModal: () => void;
	title?: string;
	widthClass?: string;
}

const ModalWindowProvider = ({
	isOpen,
	openModal,
	closeModal,
	children,
	title,
	widthClass,
}: Props) => {
	const [modalTitle, setModalTitle] = useState<string>(title as string);
	const [modalWidthClass, setModalWidthClass] = useState<string>(
		widthClass as string,
	);
	return (
		<ModalContext.Provider
			value={{
				isOpen,
				openModal,
				closeModal,
				modalTitle,
				modalWidthClass,
				setModalTitle,
				setModalWidthClass,
			}}
		>
			<ModalWindow>{children}</ModalWindow>
		</ModalContext.Provider>
	);
};

export default ModalWindowProvider;
