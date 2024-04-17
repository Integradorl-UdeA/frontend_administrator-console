import React from 'next';
import Table from '@/components/common/Table';

const InventoryPage = () => {
  const headers = ['Inventario', 'Nombre', 'Fecha'];
  const data = [
    {
      Inventario: '001',
      Nombre: 'LIS',
	  Fecha: '13/10/2023',
    },
    {
      Inventario: '002',
      Nombre: 'TELEMÁTICA',      
	  Fecha: '13/10/2023',
    },
  ];

  return (
    <div>
      <h1 className='my-8 font-bold' style={{ color: 'green' }}>Gestión de inventario</h1>
      <Table />
      {/*<Table headers={headers} data={data} />*/}
    </div>
  );
};

export default InventoryPage;