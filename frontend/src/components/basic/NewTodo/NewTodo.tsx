import React, { ChangeEvent, FormEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { createTodo } from '../../../api/todoAPIs'
import { useAppDispatch } from '../../../store'
import { createTodoHandler } from '../../../store/slices/todoSlice'
import "./index.scss"

const NewTodo = ({ setShowCreate }: { setShowCreate: Function }) => {
  const dispatch = useAppDispatch()
  const [title, setTitle] = useState("")
  const handleTitleChange = (e: ChangeEvent) => {
    setTitle(e.target.value)
  }
  const handleCreateTodo = (e: FormEvent) => {
    e.preventDefault()
    createTodo({ title }).then(res => {
      dispatch(createTodoHandler(res.data.todo))
      toast.success(res.data.msg)
      setShowCreate(false)
    }).catch(e => {
      toast.error(e.response.data?.msg)
    })
  }
  const handleCreateCancel = () => {
    setShowCreate(false)
  }
  return (
    <form onSubmit={handleCreateTodo}>
      <input onBlur={handleCreateCancel} className='createTodo' autoFocus type="text" value={title} onChange={handleTitleChange} />
    </form>
  )
}

export default NewTodo