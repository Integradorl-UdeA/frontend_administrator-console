/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useEffect } from 'react';
import CategorySelection from './CategorySelection';
import { useInventoryForm } from '@/store/inventoryFormStore';
import UniqueItemForm from './UniqueItemForm';
import { AiOutlineClose } from 'react-icons/ai';
import { FaPlus } from 'react-icons/fa';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import {
	type FieldValues,
	type SubmitHandler,
	useForm,
	useController,
} from 'react-hook-form';

import { formUniqueItemToApiReq } from '@/lib/itemFormToApi';
import type { IItemFormData } from '@/types/item-types';

interface InventoryFormProps {
	closeModal: () => void;
}

const InventoryForm = ({ closeModal }: InventoryFormProps) => {
	const setFormState = useInventoryForm((state) => state.setFormState);
	const formState = useInventoryForm((state) => state.formState);
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);

	const { register, handleSubmit, control } = useForm();

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		console.log(data) 
		const apiData = formUniqueItemToApiReq(data as IItemFormData)
		console.log(apiData)
		closeModal != null && closeModal();
	};

	const { field: categorySelectionId } = useController({
		name: 'categoryId',
		control,
	});

	useEffect(() => {
		categorySelectionId.onChange(selectedCategory.id);
	}, [selectedCategory]);

	return (
		<>
			{formState === 0 && (
				<>
					<CategorySelection />
					<div className=' flex justify-between mt-8'>
						<button
							className=' flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100'
							type='button'
							onClick={() => {
								closeModal != null && closeModal();
							}}
						>
							<AiOutlineClose className='text-white bg-red-500 rounded-full p-1 mr-2 text-2xl' />
							Cancelar
						</button>
						<button
							className=' flex items-center justify-center bg-white py-2 px-3 rounded-full font-medium shadow-lg hover:bg-greenThree/10'
							type='button'
							onClick={() => {
								setFormState(1);
							}}
						>
							<IoMdArrowRoundForward className='text-white bg-greenThree rounded-full p-1 mr-2 text-2xl' />
							Siguiente
						</button>
					</div>
				</>
			)}

			{formState === 1 && (
				<>
					<UniqueItemForm register={register} control={control} />
					<div className=' flex justify-between mt-8'>
						<button
							className=' flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100'
							type='button'
							onClick={() => {
								setFormState(0);
							}}
						>
							<IoMdArrowRoundBack className='text-white bg-red-500 rounded-full p-1 mr-2 text-2xl' />
							Volver
						</button>
						<button
							onClick={handleSubmit(onSubmit)}
							className=' flex items-center justify-center bg-white py-2 px-3 rounded-full font-medium shadow-lg hover:bg-greenThree/10'
							type='submit'
						>
							<FaPlus className='text-white bg-greenThree rounded-full p-1 mr-2 text-2xl' />
							Crear Item
						</button>
					</div>
				</>
			)}
		</>
	);
};

export default InventoryForm;