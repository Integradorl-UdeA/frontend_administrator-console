import { NavLinks } from './NavLinks';
import { Inter } from 'next/font/google';
import React from 'react';
import styles from '@/styles/SideNav.module.css';
const inter = Inter({ subsets: ['latin'] });

const SideNav = () => {
	return (
		<nav className={styles.nav}>
			<div className={styles.logoContainer}>
				<img src='/images/avatar_login.png' alt='logo lis' className='w-20' />
				<span className={styles.containerLogoTitle}>&lt;hello lis/&gt;</span>
			</div>
			<div className={styles.linksContainer}>
				<NavLinks />
			</div>
		</nav>
	);
};

export { SideNav };
