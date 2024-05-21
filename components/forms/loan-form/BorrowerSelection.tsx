import React from 'react';
import FormError from '../errors-logs/FormError';
import { useFormContext } from 'react-hook-form';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';
import btnStyles from '@/styles/common/button-styles.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { useLoanForm } from '@/store/loan-form-store';

const BorrowerSelection = () => {
	const setFormSection = useLoanForm((state) => state.setFormSection);
	const { closeModal } = useModalContext();
	const {
		register,
		formState: { isValid, errors },
		reset,
        trigger,
        getValues
	} = useFormContext();

	const handleNext = async () => {
		// TODO Validate the if user exist (It is made in the back)
        await trigger('borrowerUser')
		if (isValid) setFormSection(1);
	};
    console.log()
    
	return (
		<div>
			<div className='flex flex-col m-4 flex-1 justify-center'>
				<label className='mr-5' htmlFor='name'>
					Nombre de usuario del Prestatario:
				</label>
				<input
                    defaultValue={getValues('borrowerUser')}
					type='text'
					className='w-full rounded-lg py-1 px-3 text-base focus:outline-greenTwo'
					{...register('borrowerUser', {
						required: {
							value: true,
							message: 'Debe llenar el campo',
						},
					})}
				/>
				{errors.borrowerUser != null && (
					<FormError msg={errors.borrowerUser.message as string} />
				)}
			</div>
			<div className=' flex justify-between mt-8'>
				<button
					className={btnStyles.btnCancel}
					type='button'
					onClick={() => {
						reset();
						closeModal();
					}}
				>
					<AiOutlineClose
						className={`text-white bg-red-500 ${btnStyles.btnIcon}`}
					/>
					Cancelar
				</button>
				<button
					onClick={handleNext}
					className={btnStyles.btnSubmit}
					type='submit'
				>
					<IoMdArrowRoundForward
						className={`text-white bg-greenThree ${btnStyles.btnIcon}`}
					/>
					Siguiente
				</button>
			</div>
		</div>
	);
};

export default BorrowerSelection;
