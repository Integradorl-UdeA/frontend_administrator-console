"use client"
import React from 'react';
import { FaUser } from 'react-icons/fa';
import InputPassword from '../common/InputPassword';
import styles from '@/styles/Login/Login.module.css';
import commonStyles from '@/styles/common/Inputs.module.css';
import { useForm } from 'react-hook-form';

function LoginForm() {
	const { register, handleSubmit } = useForm()
	return (
		<section className={styles.formContainer}>
				<span className={styles.userIconContainer}>
					<FaUser className={styles.userIcon}/>
				</span>
			<span className={styles.welcome}>¡Bienvenid@!</span>
			<span className={styles.label}>Inicia sesión o registrate</span>

			<form className={styles.form} onSubmit={handleSubmit(data => console.log(data))}>
				<div className={styles.formSection}>
					<input className={commonStyles.inputText}type='text' {...register('username')} placeholder='Username' />
				</div>
				<div className={styles.formSection}>
					<InputPassword register={register}></InputPassword>
				</div>
				<button className={commonStyles.btnSubmit} type='submit'>Ingresar</button>
			</form>
		</section>
	);
}

export default LoginForm;
