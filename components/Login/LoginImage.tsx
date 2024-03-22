import React from 'react'
import styles from '@/styles/Login/Login.module.css';

function LoginImage() {
  return (
    <div className={styles.sideImgContainer}>
      
      <div className={styles.sistemasLogoContainer}>
        <img className={styles.sistemasLogo} src="/images/ig-sistemas.png" alt="" />
      </div>
    </div>
  )
}

export default LoginImage