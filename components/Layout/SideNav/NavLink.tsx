import Link from 'next/link';
import React from 'react';
import type { IconType } from 'react-icons';
import styles from '@/styles/SideNav.module.css'


interface Props  {
    route: string,
    label: string,
    icon: IconType
}

function NavLink({route, label, icon: Icon}: Props ) {
	return (
        <Link href={route} className={styles.link}>
            {Boolean(Icon) && <Icon />}
            <span>{label}</span>
        </Link>
    );
}

export default NavLink;
