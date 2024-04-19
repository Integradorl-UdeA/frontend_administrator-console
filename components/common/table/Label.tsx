import React from 'react';
import styles from '@/styles/Table/table.module.css';

interface LabelProps{
    text: string;
    textColor: string;
    bgColor: string;
    
}
const Label = ({ text, textColor, bgColor }: LabelProps) => {
    // Determinar las clases CSS basadas en las propiedades recibidas
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}/60`;
  
    return (
      <div className={`${styles.labelTable} ${textColorClass} ${bgColorClass}`}>
        {text}
      </div>
    );
  };
  
  export default Label;