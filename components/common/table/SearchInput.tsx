import React from 'react';
import styles from '@/styles/Table/table.module.css';

const SearchInput = () => {
  return (
    <div className="relative flex items-center mt-4 md:mt-0">
      <span className="absolute">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </span>
      <input
        type="text"
        placeholder="Search"
        className={styles.searchInputTable}
      />
    </div>
  );
};

export default SearchInput;
