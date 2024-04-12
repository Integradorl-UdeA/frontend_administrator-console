import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getLinks } from '@/services/getLinks';
import NavLink from './NavLink';
import styles from '@/styles/SideNav.module.css'

const NavLinks = () => {
	const links = getLinks();
	const pathName = usePathname();
	const [activeLink, setActiveLink] = useState('');

	useEffect(() => {
		// Actualiza el estado de activeLink cuando cambia la ruta
		setActiveLink(pathName); 
	}, [pathName]);


	return (
		<ul className={styles.ul}>
			{links.map(({ label, route, icon: Icon }) => (
				<li key={route} className={`${styles.li} ${route === activeLink && styles.active}`}>
					<NavLink label={label} route={route} icon={Icon} />
				</li>
			))}
		</ul>
	);
};

export { NavLinks };
