import React from 'react';
import CreateFieldForm from './CreateFieldForm';
import type { Control, FieldValues } from 'react-hook-form';
import { useCategoryForm } from '@/store/categoryFormStore';

interface Props {
	control: Control<FieldValues, any>;
}
const AdditionalCatAttributes = ({ control }: Props) => {
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);

	const { attributes, listAttributes } = additionalAttr;
	return (
		<>
			<div className='bg-greenFour/30 p-4 rounded-xl min-w-[45vw] mb-2'>
				<CreateFieldForm />
			</div>
			<div className='bg-greenFour/30 p-4 rounded-xl min-w-[45vw] mb-10'>
				{(attributes.length !== 0 || listAttributes.length !== 0) && (
					<h3 className='text-lg font-semibold'>
						Campos adicionales creados:{' '}
					</h3>
				)}
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
