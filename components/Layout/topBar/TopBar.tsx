/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import { useGetContentful } from '@/api-hooks/contentful/useGetContentful';
import { Spinner } from '@/components/common/Spinner';
import styles from '@/styles/TopBar.module.css';
import { signOut, useSession } from 'next-auth/react';
import { Inter } from 'next/font/google';
import { GoSignOut } from 'react-icons/go';


const inter = Inter({ subsets: ['latin'] });

const TopBar = () => {
	const userInfo = useSession().data?.user;
	const {data, isLoading}  = useGetContentful(userInfo?.username);
	 // Empty dependency array to run only once on mount

	const role =
		userInfo?.role === 'AUXADMI' ? 'Auxiliar Administrativo' : 'Jefe';
	return (
		<header className={styles.topBarContainer}>
			<div className={styles.profile}>
				<span className={`${inter.className} font-bold`}>{userInfo?.name}</span>
				<span>{role}</span>
			</div>
			<div>
			{isLoading && (
				<Spinner color={'gray-300'} />
			)}
				<img src={data?.fields.file.url} alt='' className={styles.img} />
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

