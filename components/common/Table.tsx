import React from 'react';
import { HiOutlinePrinter } from 'react-icons/hi';
import { BiEdit } from 'react-icons/bi';
import { MdOutlineDelete } from 'react-icons/md';

interface TableProps {
  headers: string[];
  data: any[];
}

const Table: React.FC<TableProps> = ({ headers, data }) => {
  return (
    <table className="w-full whitespace-nowrap">
      <thead>
        <tr className="h-16 text-left text-sm font-semibold bg-gray-100 border-b border-gray-300">
          {headers.map((header, index) => (
            <th key={index} className="pl-4">
              {header}
            </th>
          ))}
          <th className="pl-4 pr-4 text-center">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index} className="h-16 text-sm border-b border-gray-300">
            {headers.map((header, i) => (
              <td key={i} className="pl-4">
                {item[header]}
              </td>
            ))}
            <td className="pl-4 pr-4 text-center">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 rounded mr-2">
                <HiOutlinePrinter size={16} />
              </button>
              <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-2 rounded mr-2">
                <BiEdit size={16} />
              </button>
              <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-2 rounded">
                <MdOutlineDelete size={16} />
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;