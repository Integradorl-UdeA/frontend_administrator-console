import React from 'react';
import styles from '@/styles/Table/Table.module.css';

interface LabelProps{
    text: string;
    textColor: string;
    bgColor: string;
    
}
const Label = ({ text, textColor, bgColor }: LabelProps) => {

  
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}`;
  
    return (
      <div className={`${styles.labelTable} ${textColorClass} ${bgColorClass}`}>
        {text}
      </div>
    );
  };
  
  export default Label;