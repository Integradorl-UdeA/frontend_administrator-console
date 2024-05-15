/* eslint-disable react/react-in-jsx-scope */
'use client';

import React from 'react';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import styles from '@/styles/Login/Layout.module.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

const LoginLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<head>
				<title>Consola de Administrador</title>
			</head>
			<body className={`${styles.body} ${inter.className}`}> 
				{children}
			</body>
		</html>
	);
};

export default LoginLayout