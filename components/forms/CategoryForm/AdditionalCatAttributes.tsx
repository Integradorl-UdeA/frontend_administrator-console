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
			<CreateFieldForm />
		</>
	);
};

export default AdditionalCatAttributes;
