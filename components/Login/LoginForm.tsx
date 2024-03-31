/* eslint-disable @typescript-eslint/no-misused-promises */
"use client"
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';
import InputPassword from '../common/InputPassword';
import styles from '@/styles/Login/Login.module.css';
import commonStyles from '@/styles/common/Inputs.module.css';
import { useForm } from 'react-hook-form';
import type { FieldValues, SubmitHandler } from "react-hook-form";
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


function LoginForm() {
	const router = useRouter();
	const [errors, setErrors] = useState<Array<string | null | undefined>>([])
	const { register, handleSubmit } = useForm()
	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		const responseNextAuth = await signIn("credentials", {
			username: data.username,
			password: data.password,
			redirect: false,
		});
		console.log('error', responseNextAuth?.error)
		if (responseNextAuth?.error !== null && responseNextAuth?.error !== undefined) {
			setErrors([responseNextAuth?.error]);
			console.log(errors === undefined)
			return
		}
		router.push("/")
	}
	return (
		<section className={styles.formContainer}>
			<span className={styles.userIconContainer}>
				<FaUser className={styles.userIcon} />
			</span>
			<span className={styles.welcome}>¡Bienvenid@!</span>
			<span className={styles.label}>Inicia sesión o registrate</span>

			<form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
				<div className={styles.formSection}>
					<input className={commonStyles.inputText} type='text' {...register('username')} placeholder='Username' />
				</div>
				<div className={styles.formSection}>
					<InputPassword register={register}></InputPassword>
				</div>
				{
					errors.length !== 0 && (
						<p className={commonStyles.error}>Credenciales incorrectas</p>
					)

				}
				<button className={commonStyles.btnSubmit} type='submit'>Ingresar</button>
			</form>
		</section>
	);
}

export default LoginForm;
