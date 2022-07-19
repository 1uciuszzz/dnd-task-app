import React from 'react'
import "./index.scss"
import Complete from '../../basic/Complete/Complete'
import Learning from '../../basic/Learning/Learning'
import Prepare from '../../basic/Prepare/Prepare'

const TodoLayout = () => {
  return (
    <div className='todoContainer'>
      <Prepare />
      <Learning />
      <Complete />
    </div>
  )
}

export default TodoLayout