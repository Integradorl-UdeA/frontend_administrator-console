/* eslint-disable react/react-in-jsx-scope */
'use client';
import '@/styles/globals.css';
import React from 'react';
import { Inter } from 'next/font/google';
import { SideNav } from '@/components/Layout/SideNav/SideNav';
import { TopBar } from '@/components/Layout/topBar/TopBar';
import layoutStyles from '@/styles/Layout.module.css';
import SessionAuthProvider from '@/context/SessionAuthProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
	children: React.ReactNode;
}
const queryClient = new QueryClient();
const RootLayout = ({ children }: RootLayoutProps) => {
	return (
		<html lang='en'>
			<head>
				<title>Consola de Administrador</title>
			</head>
			<QueryClientProvider client={queryClient}>
				<body className={`${inter.className} ${layoutStyles.bodyContainer}`}>
					<SessionAuthProvider>
						<SideNav />
						<TopBar />
						<main className={layoutStyles.mainContainer}>{children}</main>
					</SessionAuthProvider>
				</body>
			</QueryClientProvider>
		</html>
	);
};

export default RootLayout;
