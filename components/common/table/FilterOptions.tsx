
'use client';
import React, { useState } from 'react';
import styles from '@/styles/Table/table.module.css';

interface FilterButtonsProps{
    options: string[]
}

const FilterButtons = ({ options }:FilterButtonsProps) => {
    const [selectedOption, setSelectedOption] = useState(options[0]);
  
    return (
    <div className={styles.filterOptionBlockTable}>
        {options.map((option, index) => (
            <button
                key={index}
                className={`${styles.filterOptionTable} ${
                    option === selectedOption
                        ? styles.filterOptionTableSelect
                        : styles.filterOptionTableSelectDark
                }`}
                onClick={() => { setSelectedOption(option); }}
            >
                {option}
            </button>
        ))}
    </div>
    );
  };
  
  export default FilterButtons;