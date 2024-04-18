import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';

interface ActionButtonsProps {
    onEdit: (arg: any) => void;
    onDelete: (arg: any) => void;
}

const ActionButtons = ({ onEdit, onDelete }:ActionButtonsProps) => {
  return (
    <td className="pl-4 pr-4 text-center">
      <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2">
        <BiEdit size={16} />
      </button>
      <button  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
        <MdOutlineDelete size={16} />
      </button>
    </td>
  );
};

export default  ActionButtons;
