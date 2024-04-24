import React, { useState } from 'react';
import styForm from '@/styles/common/Forms.module.css';
import CreateFieldButtons from './CreateFieldButtons';
import { useCategoryForm } from '@/store/categoryFormStore';

const CreateTextField = () => {
	const [attribute, setAttribute] = useState<string>('');
    const setFormFieldStatus = useCategoryForm(state => state.setFormFieldStatus)
    const addAttribute = useCategoryForm(state => state.addAttribute)
	
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setAttribute(value);
	};
    
    const handleCreateField = () =>{
        addAttribute(attribute)
        setFormFieldStatus(0)
    }

	return (
		<>
			<div className={styForm.formSectionCol}>
				<label htmlFor='' className='block w-full mb-3'>
					Ingrese el nombre del nuevo campo:
				</label>
				<input
					className='block w-full'
					type='text'
					placeholder='Nuevo campo'
					name='attribute'
					onChange={handleChange}
				/>
			</div>
            <CreateFieldButtons handleCreateField={handleCreateField} />
		</>
	);
};

export default CreateTextField;
