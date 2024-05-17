import React from 'react';
import styles from '@/styles/modals/Modal.module.css';
import { IoClose } from 'react-icons/io5';
import { useModalContext } from './modal-window-context';

interface Props {
	onClose?: () => void;
}
const CloseModal = ({onClose}: Props) => {
	const { closeModal } = useModalContext();

	const onClick = () => {
        onClose !== undefined && onClose()
        closeModal()
    };
	return (
		<button onClick={onClick} className={styles.closeButton}>
			<IoClose></IoClose>
		</button>
	);
};

export default CloseModal;
