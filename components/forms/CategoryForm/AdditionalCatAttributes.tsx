import React from 'react';
import type { IAdditionalAttr } from '@/types/categoryTypes';
import CreateFieldForm from './CreateFieldForm';

interface Props {
	additionalAttr: IAdditionalAttr;
	setAdditionalAttr: React.Dispatch<React.SetStateAction<IAdditionalAttr>>;
}
const AdditionalCatAttributes = ({
	additionalAttr,
	setAdditionalAttr,
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
				additionalAttr={additionalAttr}
				setAdditionalAttr={setAdditionalAttr}
			/>
		</>
	);
};

export default AdditionalCatAttributes;