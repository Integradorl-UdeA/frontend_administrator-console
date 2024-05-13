/* eslint-disable @typescript-eslint/no-misused-promises */
'use client';
import React, { useState } from 'react';
import InputPassword from '../common/InputPassword';
import styles from '@/styles/Login/Login.module.css';
import commonStyles from '@/styles/common/Inputs.module.css';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

function LoginForm() {
	const router = useRouter();
	const [errors, setErrors] = useState<Array<string | null | undefined>>([]);
	const { register, handleSubmit } = useForm();
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const responseNextAuth = await signIn('credentials', {
			username: data.username,
			password: data.password,
			redirect: false,
		});
		if (
			responseNextAuth?.error !== null &&
			responseNextAuth?.error !== undefined
		) {
			setErrors([responseNextAuth?.error]);
			console.log(errors === undefined);
			return;
		}
		router.push('/');
	};

	return (
		<section className={styles.formContainer}>
			<div className={styles.formContainerTwo}>
				<span className={styles.userIconContainer}>
					<img src='/images/avatar_login.png' alt='avatar logo pinguino' className='w-14' />
				</span>
				<span>
					<img src='/images/name-app-logo.png' alt='Logo letras hello lis' className='w-50' />
				</span>
				<span className={styles.label}>Inicia sesión o regístrate</span>

				<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
					<div className={styles.formSection}>
						<input
							className={commonStyles.inputText}
							type='text'
							{...register('username')}
							placeholder='Username'
						/>
					</div>
					<div className={styles.formSection}>
						<InputPassword register={register}></InputPassword>
					</div>
					{errors.length !== 0 && (
						<p className={commonStyles.error}>Credenciales incorrectas</p>
					)}
					<button className={commonStyles.btnSubmit} type='submit'>
						Ingresar
					</button>
				</form>
			</div>
			<div className={styles.logosContainer}>
				<div className={styles.sistemaslogoContainer}>
					<img src='/images/ig-sistemas.png' alt='Logo departamento ingeniería de sistemas' />
				</div>

				<div className={styles.udealogoContainer}>
					<img src='/images/ig-udea.png' alt='Logo horizontal Universidad de Antioquia' />
				</div>
			</div>
		</section>
	);
}

export default LoginForm;
