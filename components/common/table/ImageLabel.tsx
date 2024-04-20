import React from 'react';
import styles from '@/styles/Table/Table.module.css';

interface LabelProps{
    text: string;
    textColor: string;
    bgColor: string;
    images: string[];
}

const ImageLabel = ({ text, textColor, bgColor, images }: LabelProps) => {
    const textColorClass = `text-${textColor}`;
    const bgColorClass = `bg-${bgColor}/60`;
  
    return (
      <div className={`${styles.labelTable} ${textColorClass} ${bgColorClass}`}>
        <div className="flex items-center">
          {images.map((imageUrl, index) => (
            <img
              key={index}
              className="object-cover w-6 h-6 -mx-1 border-2 border-white rounded-full shrink-0"
              src={imageUrl}
              alt="cualquier cosa"
            />
          ))}
          <h4 className='px-2'>{text}</h4>
        </div>
      </div>
    );
};

export default ImageLabel;

