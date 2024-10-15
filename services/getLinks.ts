import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { AiFillHome, AiFillProfile } from 'react-icons/ai';

export const getLinks = () => [
	{
		label: 'Home',
		route: '/',
		icon: AiFillHome,
	},
	{
		label: 'Inventario',
		route: '/inventario',
		icon: HiArchiveBoxArrowDown,
	},
	{
		label: 'Categorías',
		route: '/categorias',
		icon: AiFillProfile,
	},
	{
		label: 'Prestamos',
		route: '/prestamo',
		icon: HiArchiveBoxArrowDown,
	},
];
