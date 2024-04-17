/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import commonStyles from '@/styles/common/Inputs.module.css';
import sForms from '@/styles/common/Forms.module.css'
import InputSwitch from '@/components/common/InputSwitch';
import { useForm } from 'react-hook-form'
import type { FieldValues, SubmitHandler } from 'react-hook-form'
import CreateFieldForm from './CreateFieldForm';
import type { TfieldInfo } from '@/types/formTypes';

const CategoryForm = () => {

    const { register, handleSubmit, control } = useForm()
    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        console.log(data)
    }

    const [fieldsInfo, setFieldsInfo] = useState<TfieldInfo[]>([])
    const [fieldFormState, setFormFieldState] = useState<0 | 1 | 2>(0)

    const handleChangeText = () => {
        if (fieldFormState === 1) return
        setFormFieldState(1)
    }

    const handleChangeList = () => {
        if (fieldFormState === 2) return
        setFormFieldState(2)
    }

    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <div className={sForms.formSection}>
                <label className="mr-5" htmlFor="name">Nombre: </label>
                <input type="" className={commonStyles.inputText} {...register("nombre")} />
            </div>
            <div className={sForms.formSection}>
                <InputSwitch label='Cuantizable' control={control} name='quantizable' />
                <InputSwitch label='Prestable' control={control} name='prestable' />
            </div>
            <div className={sForms.formSection}>
                {
                    fieldsInfo.length !== 0 && (
                        <div>
                    {
                        fieldsInfo.map((input, index) => (
                            <div key={index}>
                                {input.type === 1 && (
                                        <input type="text" {...register(input.name)} placeholder={input.name} />
                                )}
                                {input.type === 2 && (
                                        <select {...register(input.name)} id="">
                                            {
                                                input.list?.map( (item, index) => (
                                                    <option key={index} value={item}>{item}</option>
                                                ) )
                                            }
                                        </select>
                                )}
                            </div>
                        ))
                    }
                </div>
                    )
                }
                {
                    fieldFormState === 0 && (
                        <>
                            <button type="button" onClick={handleChangeText}>Crear nuevo campo de texto</button>
                            <button type="button" onClick={handleChangeList}>Crear nuevo campo de lista</button>
                        </>
                    )
                }
                {
                    fieldFormState !== 0 && (
                        <CreateFieldForm fieldFormState={fieldFormState} setFieldFormState={setFormFieldState} setFieldsInfo={setFieldsInfo} fieldsInfo={fieldsInfo}/>
                    )
                }
            </div>
            <button type='submit'>
                Enviar
            </button>
        </form>
    )
}

export default CategoryForm