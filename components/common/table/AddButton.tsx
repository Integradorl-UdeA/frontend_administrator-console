import React from 'react';
import styles from '@/styles/Table/Table.module.css';

interface AddButtonProps {
	text: string;
}

const AddButton = ({ text }: AddButtonProps) => {
	return (
		<button className={styles.addButtonTable}>
			<svg
				xmlns='http://www.w3.org/2000/svg'
				fill='none'
				viewBox='0 0 24 24'
				strokeWidth='1.5'
				stroke='currentColor'
				className='w-5 h-5'
			>
				<path
					strokeLinecap='round'
					strokeLinejoin='round'
					d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
				/>
			</svg>

			<span>{text}</span>
		</button>
	);
};

export { AddButton };
