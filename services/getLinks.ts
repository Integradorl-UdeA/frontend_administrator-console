import { HiArchiveBoxArrowDown } from 'react-icons/hi2';
import { AiFillHome, AiFillProfile, AiFillCode } from 'react-icons/ai';
import { BsCalendar2DateFill } from 'react-icons/bs';

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
		label: 'Tareas',
		route: '/tareas',
		icon: AiFillCode,
	},
	{
		label: 'Reporte de horas',
		route: '/reportehoras',
		icon: BsCalendar2DateFill,
	},
	{
		label: 'Prestamos',
		route: '/prestamo',
		icon: HiArchiveBoxArrowDown,
	},
	{
		label: 'Contabilidad',
		route: '/contabilidad',
		icon: AiFillHome,
	},
];
