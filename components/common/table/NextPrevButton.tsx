// Button.js
import React from 'react';
import styles from '@/styles/Table/Table.module.css';

interface NextPrevButtonProps {
    onClick: (arg: any) => void;
    disabled: boolean;
    text: string;
    d: string;
    svg: string;
    
}

const NextPrevButton = ({ onClick, disabled, text, d, svg }: NextPrevButtonProps) => {
  const isNext = text === 'Siguiente'; // Verifica si el texto es 'Siguiente'
  
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={disabled ? `${styles.nextPrevPageTable} brightness-75` : `${styles.nextPrevPageTable}` }
      >
        {isNext ? <span>{text}</span> : null}
        <svg
          xmlns={svg}
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-5 h-5 rtl:-scale-x-100'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d={d}
          />
        </svg>
        {isNext ? null : <span>{text}</span>}
      </button>
    );
  };

export default NextPrevButton;
