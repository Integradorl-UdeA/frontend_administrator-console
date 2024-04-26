import React from 'react';
import CreateFieldForm from './field-form/CreateFieldForm';
import { useCategoryForm } from '@/store/categoryFormStore';
import { Table } from '@/components/common/table/Table';
import type { IListAttr } from '@/types/categoryTypes';
import AttributeRow from './AttributeRow';

const AdditionalCatAttributes = () => {
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);
	const formFieldStatus = useCategoryForm((state) => state.formFieldStatus);
	const { attributes, listAttributes } = additionalAttr;

	const hasAdditionalAttr = () =>
		attributes.length !== 0 || listAttributes.length !== 0;

	const isEdition = () => {
		return formFieldStatus === 3 || formFieldStatus === 4;
	};

	return (
		<div className='bg-greenFour/30 p-4 rounded-xl min-w-[45vw] mb-2'>
			<CreateFieldForm />
			{hasAdditionalAttr() && !isEdition() && (
				<div className='flex flex-col justify-center items-center'>
					<h3 className='text-lg font-semibold'>
						Campos adicionales creados:{' '}
					</h3>
					<Table column={['Nombre', 'Valores', 'Acciones']}>
						{attributes.length !== 0 &&
							attributes.map((attr) => (
								<AttributeRow key={attr} name={attr} value='Text' />
							))}
						{listAttributes.length !== 0 &&
							listAttributes.map((attr: IListAttr) => (
								<AttributeRow
									key={attr.name}
									name={attr.name}
									value={attr.list}
								/>
							))}
					</Table>
				</div>
			)}
			{!hasAdditionalAttr() && (
				<div className='flex justify-center'>
					<span className='text-base font-semibold'>
						No se ha creado ningún campo adicional
					</span>
				</div>
			)}
		</div>
	);
};

export default AdditionalCatAttributes;
