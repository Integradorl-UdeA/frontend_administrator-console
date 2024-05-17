import React from 'react'
import styles from '@/styles/modals/Modal.module.css';
import { useModalContext } from './modal-window-context';


interface Props {
  children: React.ReactNode,
}
const ModalWindow = ({ children}: Props) => {

  const {modalTitle, modalWidthClass} = useModalContext()

  return (
    <div className={styles.overlay}>
      <div className={`${styles.container} ${modalWidthClass}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>{modalTitle}</h3>
        </div>
        <div className={styles.body}>
          {children}
        </div>

      </div>
    </div>
  )
}

export default ModalWindow