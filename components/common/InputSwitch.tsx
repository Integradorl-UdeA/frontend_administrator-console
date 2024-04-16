'use client'
import React, { useEffect, useState } from 'react'
import styInputSwitch from '@/styles/common/InputSwitch.module.css'
import { useController, type Control, type FieldValues } from 'react-hook-form'

interface Props {
  label: string
  name: string,
  control: Control<FieldValues, any>
}
const InputSwitch = ({ label, name, control }: Props) => {
  const [isChecked, setIsChecked] = useState(false)
  const { field } = useController({ name, control, defaultValue: false })
  const toggle = () => {
    setIsChecked(prev => !prev)
  }

  useEffect(() => {
    field.onChange(isChecked)  
  }, [isChecked])
  
  const containerClasses = isChecked ? `${styInputSwitch.switchContainer} ${styInputSwitch.active}` : `${styInputSwitch.switchContainer}`
  return (
    <div className={styInputSwitch.container}>
      <label className={styInputSwitch.label} htmlFor='toggle'>{label}</label>
      <button type='button' onClick={toggle} className={containerClasses} id='toggle'>
        <div className={`${styInputSwitch.slider} `}>

        </div>
      </button>
      <input className={styInputSwitch.checkbox} type="checkbox" {...field} />
    </div>
  )
}

export default InputSwitch