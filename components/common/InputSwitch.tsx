'use client';
import React, { useEffect, useState } from 'react';
import styInputSwitch from '@/styles/common/InputSwitch.module.css';
import { useController, useFormContext } from 'react-hook-form';

interface Props {
	label: string;
	name: string;
	disabled?: boolean;
	defaultVal?: boolean;
}
const InputSwitch = ({ label, name, defaultVal, disabled }: Props) => {
	const {control, getValues} = useFormContext()
	const [isChecked, setIsChecked] = useState(getValues(name) as boolean);
	const { field } = useController({
		name,
		control,
		defaultValue: (defaultVal ?? false) || false,
	});
	const toggle = () => {
		setIsChecked((prev) => !(prev ?? false));
	};

	useEffect(() => {
		field.onChange(isChecked);
	}, [isChecked]);

	const containerClasses =
		isChecked ?? false
			? `${styInputSwitch.switchContainer} ${styInputSwitch.active}`
			: `${styInputSwitch.switchContainer}`;
	return (
		<div className={styInputSwitch.container}>
			<label className={styInputSwitch.label} htmlFor={name}>
				{label}
			</label>
			<button
				type='button'
				onClick={toggle}
				className={containerClasses}
				id={name}
        disabled={disabled}
			>
				<div className={`${styInputSwitch.slider} `}></div>
			</button>
			<input className={styInputSwitch.checkbox} type='checkbox' {...field} />
		</div>
	);
};

export default InputSwitch;
