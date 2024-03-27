"use client"
import React from 'react';
import { FaUser } from 'react-icons/fa';
import InputPassword from '../common/InputPassword';
import styles from '@/styles/Login/Login.module.css';
import commonStyles from '@/styles/common/Inputs.module.css';

function LoginForm() {
	return (
		<section className={styles.formContainer}>
				<span className={styles.userIconContainer}>
					<FaUser className={styles.userIcon}/>
				</span>
			<span className={styles.welcome}>¡Bienvenid@!</span>
			<span className={styles.label}>Inicia sesión o registrate</span>

			<form className={styles.form}>
				<div className={styles.formSection}>
					<input className={commonStyles.inputText}type='text' name='' id='' placeholder='Username' />
				</div>
				<div className={styles.formSection}>
					<InputPassword></InputPassword>
				</div>
				<button className={commonStyles.btnSubmit} type='submit'>Ingresar</button>
			</form>
		</section>
	);
}

export default LoginForm;
