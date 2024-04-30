import React from 'react'
import styles from '@/styles/modals/Modal.module.css';
import { IoClose } from "react-icons/io5";


interface Props {
  children: React.ReactNode,
  title: string
  close: () => void,
  widthClass: string
}
const ModalWindow = ({ children, title, close, widthClass}: Props) => {
  return (

    <div className={styles.overlay}>
      <div className={`${styles.container} ${widthClass}`}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button onClick={close} className={styles.closeButton}>
            <IoClose></IoClose>
          </button>
        </div>
        <div className={styles.body}>
          {children}
        </div>

      </div>
    </div>
  )
}

export default ModalWindow