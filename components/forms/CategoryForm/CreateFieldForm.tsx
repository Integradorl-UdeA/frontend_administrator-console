import React, { useEffect } from 'react';
import { useController, type Control, type FieldValues } from 'react-hook-form';
import { useCategoryForm } from '@/store/categoryFormStore';
import CreateTextField from './CreateTextField';
import CreateListField from './CreateListField';

interface Props {
	control: Control<FieldValues, any>;
}

const CreateFieldForm = ({ control }: Props) => {

	const { field: attributesField } = useController({
		name: 'attributes',
		control,
	});
	const { field: listAttributeField } = useController({
		name: 'listAttributes',
		control,
	});

	const fieldFormStatus = useCategoryForm((state) => state.formFieldStatus);
	const setFieldFormStatus = useCategoryForm(
		(state) => state.setFormFieldStatus,
	);
	const additionalAttr = useCategoryForm((state) => state.additionalAttr);

	useEffect(() => {
		attributesField.onChange(additionalAttr.attributes);
		listAttributeField.onChange(additionalAttr.listAttributes);
	}, [additionalAttr]);

	return (
		<>
			{fieldFormStatus === 0 && (
				<div className='flex my-2'>
					<button
						className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-r-none bg-green-600 text-white font-bold'
						type='button'
						onClick={() => {
							setFieldFormStatus(1);
						}}
					>
						Crear nuevo campo de texto
					</button>
					<button
						className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-l-none bg-white text-green-600 font-bold'
						type='button'
						onClick={() => {
							setFieldFormStatus(2);
						}}
					>
						Crear nuevo campo de lista
					</button>
				</div>
			)}
			<div className='bg-slate-300 rounded-lg'>
				{fieldFormStatus === 1 && <CreateTextField/>}
				{fieldFormStatus === 2 && <CreateListField/>}
			</div>
		</>
	);
};

export default CreateFieldForm;
