/* eslint-disable react/react-in-jsx-scope */
'use client';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';

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
			<body>
				<main >{children}</main>
			</body>
		</html>
	);
};

export default LoginLayout