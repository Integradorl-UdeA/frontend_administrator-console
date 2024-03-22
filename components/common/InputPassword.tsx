
import React, { useState } from 'react';
import { FaRegEye,FaRegEyeSlash } from "react-icons/fa6";


function InputPassword() {

    const [visiblePass, setVisiblePass] = useState(false)
    const onClick = () => {
        console.log(visiblePass)
        setVisiblePass(() => !visiblePass)
    }
	return (
		<>
			<button type='button' onClick={onClick}>
				{ visiblePass ? <FaRegEye /> : <FaRegEyeSlash />}
			</button>
			<input type={visiblePass ? 'text' : 'password'} name='' id='' placeholder='Password' />
		</>
	);
}

export default InputPassword;
