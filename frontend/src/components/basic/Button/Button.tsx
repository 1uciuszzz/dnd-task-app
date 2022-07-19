import React from 'react'
import { ButtonInterface } from '../../../interfaces'
import "./index.scss"

const Button = ({ value, type, style, click, disabled }: ButtonInterface) => {
  return (
    <button disabled={disabled} onClick={click} className={type} style={style}>{value}</button>
  )
}

export default Button