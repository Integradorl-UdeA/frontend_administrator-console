import React from 'react';
import NextPrevButton from './NextPrevButton';
import { useQueryClient } from '@tanstack/react-query';
interface Props {
	totalPages: number;
	setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
	currentPage: number;
	queryKey: string;
}
const NavigationBtns = ({
	totalPages,
	setCurrentPage,
	currentPage,
	queryKey,
}: Props) => {
	const queryClient = useQueryClient();
	const goToNextPage = () => {
		if (totalPages !== undefined && currentPage < totalPages - 1) {
			setCurrentPage((prev) => prev + 1);
			queryClient.refetchQueries({ queryKey: [queryKey] }).catch((error) => {
				console.error('Error invalidating queries:', error);
			});
		}
	};
	const goToPreviousPage = () => {
		if (currentPage > 0) {
			setCurrentPage((prev) => prev - 1);
			queryClient.refetchQueries({ queryKey: [queryKey] }).catch((error) => {
				console.error('Error invalidating queries:', error);
			});
		}
	};

	return (
		<div className='flex items-center mt-4 gap-x-4 sm:mt-0'>
			<NextPrevButton
				onClick={goToPreviousPage}
				disabled={currentPage === 0}
				text={'Anterior'}
				d={'M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18'}
				svg={'http://www.w3.org/2000/svg'}
			></NextPrevButton>

			<NextPrevButton
				onClick={goToNextPage}
				disabled={currentPage + 1 === totalPages}
				text={'Siguiente'}
				d={'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'}
				svg={'http://www.w3.org/2000/svg'}
			></NextPrevButton>
		</div>
	);
};

export default NavigationBtns;
