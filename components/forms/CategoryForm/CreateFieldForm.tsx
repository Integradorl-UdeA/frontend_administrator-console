import React from 'react'

interface Props{
    fieldFormState: number
    setFieldFormState: React.Dispatch<React.SetStateAction<number>>
}

const CreateFieldForm = ({ fieldFormState, setFieldFormState }: Props) => {
    

    return (
            <div>
                {
                    fieldFormState === 1 ? (
                        <>
                            <label htmlFor="">Ingrese el nombre del nuevo campo</label>
                            <input type="text" placeholder='Vaina' />
                        </>
                    )
                        :
                        (
                            <>
                                <label htmlFor="">Ingrese el nombre del nuevo campo</label>
                                <input type="text" placeholder='vaina' />
                                <label htmlFor="">Escriba los valores que puede tomar el nuevo campo (Separados con coma)</label>
                                <input type="text" placeholder='Ej: Manzana, Narnaja, Mandarina ...' />
                            </>
                        )
                }
            <button onClick={() => {
                setFieldFormState(0)
            }}>Cancelar</button>
            <button >Crear</button>
            </div>

        
    )
}

export default CreateFieldForm