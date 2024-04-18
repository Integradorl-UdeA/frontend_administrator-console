import React from 'react';
import styles from '@/styles/Table/table.module.css';

interface LabelProps{
    text: string;
    textColor: string;
    bgColor: string;
    darkMode: string;
    
}
const Label = ({ text, textColor, bgColor, darkMode }: LabelProps) => {
    // Determinar las clases CSS basadas en las propiedades recibidas
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}/60`;
    const darkModeClass =  `dark:bg-${darkMode}` ; // Solo aplicar clase dark si darkMode es verdadero
  
    return (
      <div className={`${styles.labelTable} ${textColorClass} ${bgColorClass} ${darkModeClass}`}>
        {text}
      </div>
    );
  };
  
  export default Label;