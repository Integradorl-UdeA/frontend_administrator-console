import React from 'react';
import type { IconType } from 'react-icons';  

interface Props {
  icon: IconType;
  onClick: () => void;
  className: string;
}

const ActionButton = ({ icon: Icon, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      <Icon size={16} />
    </button>
  );
};

export default  ActionButton;