import React from 'react';
import type { IAdditionalAttr } from '@/types/categoryTypes';
import CreateFieldForm from './CreateFieldForm';
import type { Control, FieldValues } from 'react-hook-form';

interface Props {
	additionalAttr: IAdditionalAttr;
	setAdditionalAttr: React.Dispatch<React.SetStateAction<IAdditionalAttr>>;
	control: Control<FieldValues, any>
}
const AdditionalCatAttributes = ({
	additionalAttr,
	setAdditionalAttr,
	control
}: Props) => {
	const { attributes, listAttributes } = additionalAttr;
	
	console.log("additionalAttributes: ", additionalAttr)

	return (
		<>
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
			<CreateFieldForm
				control={control}
				additionalAttr={additionalAttr}
				setAdditionalAttr={setAdditionalAttr}
			/>
		</>
	);
};

export default AdditionalCatAttributes;