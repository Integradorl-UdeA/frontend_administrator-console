import { useLoanForm } from '@/store/loan-form-store';
import React from 'react';
import btnStyles from '@/styles/common/button-styles.module.css';
import { TiTick } from 'react-icons/ti';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';
import { Table } from '@/components/common/table/Table';
import { getItemsPerPage } from '@/api-hooks/inventory-api/getItemsPerPage';
import { useSession } from 'next-auth/react';
import { LoanTableRow } from './LoanTableRow';
import { useFormContext } from 'react-hook-form';

const LendedItemSelection = () => {
	const token = useSession().data?.token?.token;
	const { setModalTitle, setModalWidthClass } = useModalContext();
	const { setValue } = useFormContext();
	const setFormSection = useLoanForm((state) => state.setFormSection);
	const selectedItemId = useLoanForm((state) => state.selectedItemId);
	const setSelectedItemId = useLoanForm((state) => state.setSelectedItemId);

	
	const tableHeaders = ['ID', 'Categoría', 'Atributos'];
	const { data: itemsPage } = getItemsPerPage(token as string, 0);
	
	const handleSelectItem = () => {
		setValue('itemId', selectedItemId);
		setSelectedItemId('');
		setFormSection(1);
	};
	
	setModalTitle('Seleccione el item a prestar');
	setModalWidthClass('w-10/12');
	return (
		<div>
			<div className=' flex flex-col mt-6'>
				<div className='-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
					<div className='inline-block min-w-full py-2 align-middle md:px-6 lg:px-8'>
						<div className='overflow-hidden border border-gray-200 md:rounded-lg'>
							<Table column={tableHeaders}>
								{itemsPage?.items?.map((itemTable) => {
									return (
										<LoanTableRow
											key={itemTable.id}
											itemTable={itemTable}
										></LoanTableRow>
									);
								})}
							</Table>
						</div>
					</div>
				</div>
			</div>
			<div className=' flex justify-between mt-8'>
				<button
					type='button'
					className={`${btnStyles.btn} bg-white hover:bg-blue-700/10`}
					onClick={() => {
						setFormSection(1);
					}}
				>
					<IoMdArrowRoundBack
						className={`${btnStyles.btnIcon} bg-blue-700 text-white`}
					/>
					Volver
				</button>
				<button
					type='button'
					className={`${btnStyles.btnSubmit}`}
					onClick={handleSelectItem}
				>
					<TiTick className={`${btnStyles.btnIcon} bg-greenThree text-white`} />
					Confirmar
				</button>
			</div>
		</div>
	);
};

export default LendedItemSelection;
