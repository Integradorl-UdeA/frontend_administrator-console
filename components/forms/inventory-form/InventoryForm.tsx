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
	useController,
	useFormContext,
} from 'react-hook-form';

import {
	formCuantiItemToApiPost,
	formUniqueItemToApiReq,
} from '@/lib/itemFormToApi';
import type { IItem, IItemFormData } from '@/types/item-types';
import QuantizableItemForm from './QuantizableItemForm';
import { useSession } from 'next-auth/react';
import { postCreateItem } from '@/api-hooks/inventory-api/createItemQuery';

interface InventoryFormProps {
	closeModal: () => void;
}

const InventoryForm = ({ closeModal }: InventoryFormProps) => {
	const selectedCategory = useInventoryForm((state) => state.selectedCategory);
	const formState = useInventoryForm((state) => state.formState);
	const setFormState = useInventoryForm((state) => state.setFormState);
	const clearSelectedCategory = useInventoryForm(
		(state) => state.clearSelectedCategory,
	);

	const {
		control,
		handleSubmit,
		reset,
		formState: { isSubmitSuccessful },
	} = useFormContext();

	const token = useSession().data?.token?.token;

	const { mutate: createItem } = postCreateItem(token as string);

	const onSubmit: SubmitHandler<FieldValues> = (data) => {
		let item = {};
		if (selectedCategory.quantizable) {
			item = formCuantiItemToApiPost(data as IItemFormData);
		} else {
			item = formUniqueItemToApiReq(data as IItemFormData);
		}
		createItem(item as IItem);

		setFormState(0);
		clearSelectedCategory();
		closeModal != null && closeModal();
	};

	// TODO Passing the control creation fields to the form provider?
	const { field: categorySelectionId } = useController({
		name: 'categoryId',
		control,
	});

	useEffect(() => {
		if (isSubmitSuccessful) reset();
	}, [reset, isSubmitSuccessful, formState]);

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
							disabled={selectedCategory.categoryName === ''} 
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
					{selectedCategory.quantizable ? (
						<QuantizableItemForm />
					) : (
						<UniqueItemForm />
					)}
					<div className=' flex justify-between mt-8'>
						<button
							className=' flex items-center justify-center bg-white w-max h-max py-2 px-3 rounded-full font-medium shadow-lg hover:bg-red-100'
							type='button'
							onClick={() => {
								setFormState(0);
								clearSelectedCategory();
								reset();
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
