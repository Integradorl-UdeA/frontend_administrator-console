import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import type { IconType } from 'react-icons';


interface Props{
    route: string,
    label: string,
    icon: IconType
}

function NavLink({route, label, icon: Icon}: Props ) {
    const pathname = usePathname()
    const activeClasses = 'text-black bg-white hover:text-slate-600'
    const baseClasses = 'flex text-white gap-x-2 text-lg items-center py-2 px-4 rounded-lg hover:text-slate-300' 
	return (
        <Link href={route} className={` transition-all ${baseClasses} ${route === pathname && activeClasses}`}>
            <Icon/>
            <span>{label}</span>
        </Link>
    );
}

export default NavLink;
