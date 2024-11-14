import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import type { IconType } from 'react-icons';

interface Props {
	route: string;
	label: string;
	icon: IconType;
}

function NavLink({ route, label, icon: Icon }: Props) {
	const pathname = usePathname();
	const activeClasses =
		'flex gap-x-2 text-lg items-center py-2 px-4 rounded-lg text-slate-900 bg-white hover:text-slate-600';
	const baseClasses =
		'text-white flex gap-x-2 text-lg items-center py-2 px-4 rounded-lg hover:text-slate-300';
	return (
		<Link
			href={route}
			className={` transition-all ${
				route === pathname ? activeClasses : baseClasses
			}`}
		>
			<Icon />
			<span>{label}</span>
		</Link>
	);
}

export default NavLink;
