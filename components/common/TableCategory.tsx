import React from 'react';
import { Table } from './table/Table';
import { TableRowCategory } from './table/TableRowCategory';
import { getAllCategories } from '@/api-hooks/category-api/getAllCategoriesQuery';
import { useSession } from 'next-auth/react';

const TableCategory = () => {
	const token = useSession().data?.token?.token;
	const {
		data: categories,
		isLoading,
		isError,
		error,
	} = getAllCategories(token as string);
	const cols = [
		'id',
		'Nombre',
		'Campo clave',
		'Atributos texto',
		'Atributos lista',
		'Funciones',
	];

	if (isLoading) return <p>...Cargando</p>;
	if (isError) return <p>Error: {error.message}</p>;
	return (
		<div className='flex flex-col mt-6'>
			<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
				<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
					<div className='overflow-hidden border border-gray-200 md:rounded-lg'>
						<Table column={cols}>
							{categories?.map((cat) => (
								<TableRowCategory
									key={cat.id}
									category={cat}
								></TableRowCategory>
							))}
						</Table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TableCategory;
