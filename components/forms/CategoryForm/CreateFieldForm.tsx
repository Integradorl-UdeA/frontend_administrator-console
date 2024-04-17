import React, { useState } from 'react'
import type { TfieldInfo } from '@/types/formTypes'

interface Props {
    fieldFormState: 0 | 1 | 2
    setFieldFormState: React.Dispatch<React.SetStateAction<0 | 2 | 1>>
    setFieldsInfo: React.Dispatch<React.SetStateAction<TfieldInfo[]>>
    fieldsInfo: TfieldInfo[]
}

const CreateFieldForm = ({ fieldFormState, setFieldFormState, setFieldsInfo, fieldsInfo }: Props) => {
    const defaultFormData: TfieldInfo = {
        name: "",
        type: 0,
    }
    const [formData, setFormData] = useState<TfieldInfo>(defaultFormData)
    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { name, value }: {name:string, value: string | string[]} = e.target
        // if(name === 'list') value = value.replace(/\s/g, "").split(",") 
        if(name === 'list') value = value.trim().replace(/\s*,\s*/g, ",").split(",") 
        setFormData({
            ...formData,
            [name]: value,
            type: fieldFormState
        })
    }

    const handleCreateField = () => {

        setFormData({ ...formData, type: 1 })
        setFieldFormState(0)
        console.log(formData)
        setFieldsInfo((prev) => [...prev, formData])
    }

    const formFieldText = (
        <>
            <label htmlFor="">Ingrese el nombre del nuevo campo</label>
            <input type="text" placeholder='Vaina' name="name" onChange={handleOnChange} />
        </>
    )

    const formFieldList = (
        <>
            <label htmlFor="">Ingrese el nombre del nuevo campo</label>
            <input type="text" placeholder='vaina' name="name" onChange={handleOnChange} />
            <label htmlFor="">Escriba los valores que puede tomar el nuevo campo (Separados con coma)</label>
            <input type="text" placeholder='Ej: Manzana, Narnaja, Mandarina ...' name="list" onChange={handleOnChange} />
        </>
    )

    return (
        <div>
            {
                fieldFormState === 1 && formFieldText
            }
            {
                fieldFormState === 2 && formFieldList
            }
            <button onClick={() => {
                setFieldFormState(0)
            }}>Cancelar</button>
            <button type="button" onClick={handleCreateField}>Crear</button>
        </div>


    )
}

export default CreateFieldForm