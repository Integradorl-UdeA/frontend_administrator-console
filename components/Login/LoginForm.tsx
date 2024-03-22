"use client"
import React from 'react';
import { FaUser } from 'react-icons/fa';
import InputPassword from '../common/InputPassword';


function LoginForm() {
	return (
		<section>
			<div>
				<i>
					<FaUser />
				</i>
			</div>
			<span>¡Bienvenid@!</span>
			<span>Inicia sesión o registrate</span>
			<form>
				<div>
					<input type='text' name='' id='' placeholder='Username' />
				</div>
				<div>
					<InputPassword></InputPassword>
				</div>
				<button type='submit'>Ingresar</button>
			</form>
		</section>
	);
}

export default LoginForm;
