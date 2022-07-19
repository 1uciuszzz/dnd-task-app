import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/basic/Button/Button'

const Landing = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button click={() => { navigate("/todo") }} value='Start' type='primary' style={{ border: "none", padding: "10px" }} />
    </div>
  )
}

export default Landing