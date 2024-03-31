/* eslint-disable @typescript-eslint/no-misused-promises */
import { Inter } from 'next/font/google';
import React from 'react';
import styles from '@/styles/TopBar.module.css'
import { GoSignOut } from "react-icons/go";
import { signOut } from 'next-auth/react';


const inter = Inter({ subsets: ['latin'] });

const TopBar = () => {
	return ( 	
		<header className={styles.topBarContainer}>
			<div className={styles.profile}>
				<span className={`${inter.className} font-bold`}>Pepito Pérez</span>
				<span>Administrativo</span>
			</div>
			<div>
				<img src='/images/avatar.png' alt='' className={styles.img} />
			</div>
			<button onClick={async () => {await signOut()}} className={styles.btnSignOut}>
				<GoSignOut className={styles.iconSignOut}/> 
			</button>
		</header>
	);
};

export { TopBar };
