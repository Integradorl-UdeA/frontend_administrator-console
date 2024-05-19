import { useLoanForm } from '@/store/loan-form-store';
import React, { useEffect } from 'react';
import btnStyles from '@/styles/common/button-styles.module.css';
import { TiTick } from "react-icons/ti";
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useModalContext } from '@/components/common/ModalWindow/modal-window-context';

const LendedItemSelection = () => {
	const {setModalTitle} = useModalContext()
    
    const setFormSection = useLoanForm((state) => state.setFormSection);
    useEffect( () => {
        setModalTitle("Seleccione el item a prestar")
    })
	return (
		<div>
            LendedItemSelection
			<div className=' flex justify-between mt-8'>
				<button
					className={`${btnStyles.btn} bg-white hover:bg-blue-700/10`}
					onClick={() => {
						setFormSection(0);
					}}
				>   
                <IoMdArrowRoundBack className={`${btnStyles.btnIcon} bg-blue-700 text-white`}/>
					Volver
				</button>
				<button
					className={`${btnStyles.btnSubmit}`}
					onClick={() => {
						setFormSection(0);
					}}
				>
                    <TiTick className={`${btnStyles.btnIcon} bg-greenThree text-white`}/>
					Confirmar
				</button>
			</div>
		</div>
	);
};

export default LendedItemSelection;
