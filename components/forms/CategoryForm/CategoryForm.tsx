/* eslint-disable @typescript-eslint/no-misused-promises */
import React from 'react';
import commonStyles from '@/styles/common/Inputs.module.css';
import sForms from '@/styles/common/Forms.module.css'
import InputSwitch from '@/components/common/InputSwitch';
import { useForm } from 'react-hook-form'
import type { FieldValues, SubmitHandler } from 'react-hook-form'

const CategoryForm = () => {
    const { register, handleSubmit, control } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }


    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={sForms.formSection}>
                <label className="mr-5" htmlFor="name">Nombre: </label>
                <input type="" className={commonStyles.inputText} {...register("nombre")} />
            </div>
            <div className='flex'>
                <div className={sForms.formSection}>
                    <InputSwitch label='cuantizable' control={control} name='asd' />
                </div>
            </div>
            <button type='submit'>
                Enviar
            </button>
        </form>
    )
}

export default CategoryForm