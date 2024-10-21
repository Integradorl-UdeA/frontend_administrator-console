import React from 'react';
import { getLinks } from '@/services/getLinks';
import NavLink from './NavLink';
import styles from '@/styles/SideNav.module.css'

const NavLinks = () => {
	const links = getLinks();
	return (
		<ul className={styles.ul}>
			{links.map(({ label, route, icon: Icon }) => (
				<li key={route}>
					<NavLink label={label} route={route} icon={Icon} />
				</li>
			))}
		</ul>
	);
};

export { NavLinks };
