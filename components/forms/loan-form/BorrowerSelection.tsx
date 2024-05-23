import React, { useEffect, useState } from 'react';
import FormError from '../errors-logs/FormError';
import { useFormContext } from 'react-hook-form';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';
import btnStyles from '@/styles/common/button-styles.module.css';
import { AiOutlineClose } from 'react-icons/ai';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { useLoanForm } from '@/store/loan-form-store';
import CloseModal from '@/components/common/ModalWindow/CloseModal';
import { useSession } from 'next-auth/react';
import { getUserExist } from '@/api-hooks/users-api/lis-user-api/validateUserExistQuery';

const BorrowerSelection = () => {
	const setFormSection = useLoanForm((state) => state.setFormSection);
	const { closeModal, setModalWidthClass } = useModalContext();
	const [userExist, setUserExist] = useState(false);
	const {
		register,
		formState: { isValid, errors },
		reset,
		trigger,
		getValues,
	} = useFormContext();
	const token = useSession().data?.token?.token;

	const { refetch } = getUserExist(token as string, getValues('borrowerUser'));

	const handleNext = async () => {
		await trigger('borrowerUser');
		if (isValid) {
			const refetchResult = await refetch();

			if (refetchResult.isError) setUserExist(true);
			else setFormSection(1);
		}
	};

	useEffect(() => {
		setModalWidthClass('w-1/3');
	}, [])

	return (
		<div>
			<CloseModal
				onClose={() => {
					reset();
					setFormSection(0);
				}}
			/>
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
			{userExist && (
				<>
					<p>
						El usuario con username <b>{getValues('borrowerUser')}</b> no
						existe. Verifique que esté bien escrito o pulse{' '}
						<button
							type='button'
							onClick={() => {
								setFormSection(3);
							}}
							className='inline font-bold text-greenTwo underline '
						>
							aquí
						</button>{' '}
						para crear un nuevo usuario.
					</p>
				</>
			)}
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
