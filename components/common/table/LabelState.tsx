import React from 'react';
import styles from '@/styles/Table/table.module.css';

interface LabelStateProps {
    text: string;
}


const LabelState = ({ text }:LabelStateProps) => {
  let className = '';

  switch (text.toLowerCase()) {
    case 'available':
      className = styles.labelColorAvailable;
      break;
    case 'broken':
      className = styles.labelColorBroken;
      break;
    case 'reparing':
      className = styles.labelColorRepairing;
      break;
    case 'lost':
      className = styles.labelColorLost;
      break;
    case 'present':
      className = styles.labelColorPresent;
      break;
    case 'lended':
      className = styles.labelColorLended;
      break;
    default:
      className = '';
  }


  return (
    <div className={`${className} ${styles.labelTable}`}>
      {text} {/* Primera letra en mayúscula */}
    </div>
  );
};

export default LabelState;

