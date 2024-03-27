import LoginForm from '@/components/Login/LoginForm';
import LoginImage from '@/components/Login/LoginImage';
import styles from '@/styles/Login/Login.module.css';
import React from 'react';

const LoginPage = () => {
	return (
		<main className={styles.container}>
			<LoginImage />
			<LoginForm />
		</main>
	);
};

export default LoginPage;
