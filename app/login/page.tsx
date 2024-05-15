import LoginForm from '@/components/Login/LoginForm';
import styles from '@/styles/Login/Login.module.css';
import React from 'react';

const LoginPage = () => {
	return (
		<main className={styles.container}>
			<LoginForm />
		</main>
		
	);
};

export default LoginPage;
