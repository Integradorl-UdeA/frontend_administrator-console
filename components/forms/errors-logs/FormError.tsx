import React from 'react'
interface Props{
    msg: string
}
const FormError = ({msg}: Props) => {
  return (
    <div>
        <p className='text-sm text-red-700 font-bold'>{msg}</p>
    </div>
  )
}

export default FormError