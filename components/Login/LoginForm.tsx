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
import { Spinner } from '@/components/common/Spinner';

function LoginForm() {
	const router = useRouter();
	const [errors, setErrors] = useState<Array<string | null | undefined>>([]);
	const [loading, setLoading] = useState(false);
	const { register, handleSubmit } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = async (data) => {
		setLoading(true);
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
			setLoading(false);
			return;
		}

		router.push('/');
	};

	return (
		<section className={styles.formContainer}>
			<div
				className={styles.formContainerTwo}
				style={{ opacity: loading ? 0.5 : 1 }}
			>
				<span className={styles.userIconContainer}>
					<img
						src='/images/avatar_login.png'
						alt='avatar logo pinguino'
						className='w-[70px]'
					/>
				</span>
				<span className={styles.tipografyLogo}>&lt;hello lis/&gt;</span>
				<span className={styles.label}>Inicia sesión</span>

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
					<button
						className={commonStyles.btnSubmit}
						type='submit'
						disabled={loading}
					>
						Ingresar
					</button>
				</form>
				{loading && (
					<div
						className={styles.spinnerContainer}
						style={{
							position: 'absolute',
							top: '50%',
							left: '50%',
							transform: 'translate(-50%, -50%)',
						}}
					>
						<Spinner color={'gray-300'} />
					</div>
				)}
			</div>
			<div className={styles.logosContainer}>
				<div className={styles.sistemaslogoContainer}>
					<img
						src='/images/ig-sistemas.png'
						alt='Logo departamento ingeniería de sistemas'
					/>
				</div>

				<div className={styles.udealogoContainer}>
					<img
						src='/images/ig-udea.png'
						alt='Logo horizontal Universidad de Antioquia'
					/>
				</div>
			</div>
		</section>
	);
}

export default LoginForm;
