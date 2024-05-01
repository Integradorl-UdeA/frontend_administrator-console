/* eslint-disable @typescript-eslint/no-misused-promises */
import { Inter } from 'next/font/google';
import React from 'react';
import styles from '@/styles/TopBar.module.css';
import { GoSignOut } from 'react-icons/go';
import { signOut , useSession } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] });

const TopBar = () => {
	const userInfo = useSession().data?.user;
	const role =
		userInfo?.role === 'AUXADMI' ? 'Auxiliar Administrativo' : 'Jefe';
	return (
		<header className={styles.topBarContainer}>
			<div className={styles.profile}>
				<span className={`${inter.className} font-bold`}>{userInfo?.name}</span>
				<span>{role}</span>
			</div>
			<div>
				<img src='/images/avatar.png' alt='' className={styles.img} />
			</div>
			<button
				onClick={async () => {
					await signOut();
				}}
				className={styles.btnSignOut}
			>
				<GoSignOut className={styles.iconSignOut} />
			</button>
		</header>
	);
};

export { TopBar };
