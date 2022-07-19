import React, { ChangeEvent, FormEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signIn } from '../api/todoAPIs';
import { setToken } from '../util/token';

const SignIn = () => {
  const navigate = useNavigate()
  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  const handleInputChange = (e: ChangeEvent) => {
    const { name, value } = e.target as any;
    setInputs({
      ...inputs,
      [name]: value
    })
  }
  const handleSignIn = (e: FormEvent) => {
    e.preventDefault()
    signIn(inputs.username, inputs.password).then(res => {
      if (res.data?.accessToken) {
        setToken(res.data.accessToken)
        navigate("/todo")
      } else {
        toast.error(res.data.msg)
      }
    }).catch(e => {
      toast.error(e?.response?.data?.msg)
    })
  }
  return (
    <form onSubmit={handleSignIn}>
      <label htmlFor="username">Username</label>
      <input name='username' onChange={handleInputChange} value={inputs.username} id='username' type="text" />
      <label htmlFor="password">Password</label>
      <input name='password' onChange={handleInputChange} value={inputs.password} id='password' type="password" />
      <button type='submit'>submit</button>
    </form>
  )
}

export default SignIn