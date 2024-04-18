import React from 'react';

interface GeneralTableProps {
	column: string[];
	children: React.ReactNode;
}

const Table = ({ column, children }: GeneralTableProps) => {
	return (
		<table className='min-w-full divide-y divide-gray-200 dark:divide-gray-700'>
			<thead className='bg-gray-50 dark:bg-gray-800'>
				<tr>
					{column.map((column, index) => (
						<th
							scope='col'
							className={`px-${
								index === 1 ? '12' : '4'
							} py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 dark:text-gray-400`}
							key={index}
						>
							{column}
						</th>
					))}
				</tr>
			</thead>
			<tbody className='bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900'>
				{children}
			</tbody>
		</table>
	);
};

export {Table};
