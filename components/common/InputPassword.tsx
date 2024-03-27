import React, { useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6';
import commonStyles from '@/styles/common/Inputs.module.css';

function InputPassword() {
	const [visiblePass, setVisiblePass] = useState(false);
	const onClick = () => {
		console.log(visiblePass);
		setVisiblePass(() => !visiblePass);
	};
	return (
		<div className={commonStyles.passwordContainer}>
			<input
				className={commonStyles.inputPassword}
				type={visiblePass ? 'text' : 'password'}
				name=''
				id=''
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
