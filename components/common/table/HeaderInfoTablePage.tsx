import React from 'react';

interface HeaderInfoTablePageProps {
	title: string;
	quantity: string;
}
const HeaderInfoTablePage = ({ title, quantity }: HeaderInfoTablePageProps) => {
	return (
		<div>
			<div className='flex items-center gap-x-3'>
				<h2 className='text-md font-medium text-gray-800 dark:text-white'>
					{title}
				</h2>

				<span className='px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400'>
					{quantity} elementos
				</span>
			</div>

			<p className='mt-1 text-md text-gray-500 dark:text-white'>
				Estos elementos se han añadido en los últimos 6 meses.
			</p>
		</div>
	);
};

export { HeaderInfoTablePage };
