/* eslint-disable react/react-in-jsx-scope */
'use client';
import '@/styles/globals.css';
import { Inter } from 'next/font/google';
import { SideNav } from '@/components/Layout/SideNav/SideNav';
import { TopBar } from '@/components/Layout/topBar/TopBar';
import layoutStyles from '@/styles/Layout.module.css';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<head>
				<title>Consola de Administrador</title>
			</head>
			<body className={`${inter.className} ${layoutStyles.bodyContainer}`}>
				<SideNav />
				<TopBar />
				<main className={layoutStyles.mainContainer}>{children}</main>
			</body>
		</html>
	);
};

export default RootLayout;
