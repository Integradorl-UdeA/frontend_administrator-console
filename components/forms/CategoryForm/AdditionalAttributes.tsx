import React, { useState } from 'react'
import CreateFieldForm from './CreateFieldForm'
import type { IfieldInfo } from '@/types/categoryTypes';

const AdditionalAttributes = () => {
    const [fieldsInfo, setFieldsInfo] = useState<IfieldInfo[]>([]);
	const [fieldFormState, setFormFieldState] = useState<0 | 1 | 2>(0);

	const handleChangeText = () => {
		if (fieldFormState === 1) return;
		setFormFieldState(1);
	};

	const handleChangeList = () => {
		if (fieldFormState === 2) return;
		setFormFieldState(2);
	};
  return (
    <div className="my-2">
					{fieldsInfo.length !== 0 && (
						<div className='bg-slate-300 p-3 rounded-lg'>
							<h3 className='font-bold my-2 '>Atributos adicionales</h3>
							{fieldsInfo.map((field, index) => (
								<div key={index}>
									{field.type === 1 && (
										<p>{field.name} - Texto</p>
									)}
									{field.type === 2 && (
										<p>{field.name} - {field.list?.join(", ")}</p>
									)}
								</div>
							))}
						</div>
					)}
					{fieldFormState === 0 && (
						<div className='flex my-2'>
							<button
								className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-r-none bg-green-600 text-white font-bold'
								type='button'
								onClick={handleChangeText}
							>
								Crear nuevo campo de texto
							</button>
							<button
								className='border-2 border-green-600 border-solid rounded-xl px-3 py-1 rounded-l-none bg-white text-green-600 font-bold'
								type='button'
								onClick={handleChangeList}
							>
								Crear nuevo campo de lista
							</button>
						</div>
					)}
					{fieldFormState !== 0 && (
						<CreateFieldForm
							fieldFormState={fieldFormState}
							setFieldFormState={setFormFieldState}
							setFieldsInfo={setFieldsInfo}
							fieldsInfo={fieldsInfo}
							control= { control }
						/>
					)}
				</div>
  )
}

export default AdditionalAttributes