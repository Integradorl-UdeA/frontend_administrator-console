import React from 'react';
import styles from '@/styles/Table/Table.module.css';

interface LabelProps{
    text: string;
    textColor: string;
    bgColor: string;
    
}
const Label = ({ text, textColor, bgColor }: LabelProps) => {

  
    return (
      <div className={`${styles.labelTable} ${textColor} ${bgColor}`}>
        {text}
      </div>
    );
  };
  
  export default Label;