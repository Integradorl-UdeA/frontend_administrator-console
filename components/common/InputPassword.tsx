import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import commonStyles from '@/styles/common/Inputs.module.css';
import type { FieldValues, UseFormRegister } from 'react-hook-form';


interface Props{
	register: UseFormRegister<FieldValues>
}
function InputPassword({ register }: Props) {
	const [visiblePass, setVisiblePass] = useState(false);
	const onClick = () => {
		setVisiblePass(() => !visiblePass);
	};
	return (
		<div className={commonStyles.passwordContainer}>
			<input
				className={commonStyles.inputPassword}
				type={visiblePass ? 'text' : 'password'}
				{ ...register("password") }
				placeholder='Password'
			/>
			<button
				className={commonStyles.viewPasswordToggler}
				type='button'
				onClick={onClick}
			>
				{visiblePass ? <FaRegEye /> : <FaRegEyeSlash />}
			</button>
		</div>
	);
}

export default InputPassword;
