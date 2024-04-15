'use client'
import React, { useState } from 'react'
import styInputSwitch from '@/styles/common/InputSwitch.module.css'
import type { FieldValues, UseFormRegister } from 'react-hook-form'

interface Props {
  label: string
  register: UseFormRegister<FieldValues>
}
const InputSwitch = ({ label, register }: Props) => {
  const [checkedInput, setCheckedInput] = useState(false)

  const toggle = () => {
    setCheckedInput((prev) => !prev)
  }

  const handleChange = () => {
    setCheckedInput(prev => prev)
  }

  const containerClasses = checkedInput ? `${styInputSwitch.switchContainer} ${styInputSwitch.active}` : `${styInputSwitch.switchContainer}`
  return (
    <div className={styInputSwitch.container}>
      <label className={styInputSwitch.label} htmlFor='toggle'>{label}</label>
      <button type='button' onClick={toggle} className={containerClasses} id='toggle'>
        <div className={`${styInputSwitch.slider} `}>

        </div>
      </button>
      <input className={styInputSwitch.checkbox} type="checkbox" checked={checkedInput} {...register("switch")} onChange={handleChange}/>
    </div>
  )
}

export default InputSwitch