import React from 'react';
import CreateFieldForm from './CreateFieldForm';
import { useCategoryForm } from '@/store/categoryFormStore';


const AdditionalCatAttributes = () => {
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);
	const { attributes, listAttributes } = additionalAttr;

	const hasAdditionalAttr = () =>
		attributes.length !== 0 || listAttributes.length !== 0;

	return (
		<>
			<div className='bg-greenFour/30 p-4 rounded-xl min-w-[45vw] mb-2'>
				<CreateFieldForm />
			</div>
			<div className='bg-greenFour/30 flex justify-center flex-col items-center p-4 rounded-xl min-w-[45vw] mb-10'>
				{hasAdditionalAttr() ? (
					<h3 className='text-lg font-semibold'>
						Campos adicionales creados:{' '}
					</h3>
				):
				(
					<span className='text-base font-semibold'>
						No se ha creado ningún campo adicional
					</span>
				)
				}
				{attributes.length !== 0 &&
					attributes.map((attr, index) => (
						<p key={index + 'text'}>{attr} - Texto</p>
					))}
				{listAttributes.length !== 0 &&
					listAttributes.map((listAttr, index) => (
						<p key={index + 'list'}>
							{listAttr.name} - {listAttr.list?.join(', ')}
						</p>
					))}
			</div>
		</>
	);
};

export default AdditionalCatAttributes;
