import React from 'react'
import styles from '@/styles/modals/Modal.module.css';

interface Props{
    children: React.ReactNode,
    title: string
    close: () => void
}
const ModalWindow = ( {children, title, close}: Props ) => {
  return (

    <div className={styles.overlay}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button onClick={close} className={styles.closeButton}>x</button>
        </div>
        <div className={styles.body}>
          {children}
        </div>

      </div>
    </div>
  )
}

export default ModalWindow