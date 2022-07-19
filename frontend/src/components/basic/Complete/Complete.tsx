import React, { DragEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { changeStatus } from '../../../api/todoAPIs'
import { useAppDispatch } from '../../../store'
import { changeStatusHandler } from '../../../store/slices/todoSlice'
import TodoList from '../TodoList/TodoList'
import "./index.scss"

const Complete = () => {
  const dispatch = useAppDispatch()
  const [todoOnDragEnter, setTodoOnDragEnter] = useState(false)
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setTodoOnDragEnter(true)
  }
  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setTodoOnDragEnter(false)
  }
  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setTodoOnDragEnter(false)
    const todoId = e.dataTransfer.getData("todoItemId")
    dispatch(changeStatusHandler({ id: todoId, status: 2 }))
    changeStatus(todoId, 2).then(r => {
      toast.success(r.data.msg)
    })
  }
  return (
    <div className={`completeContainer ${todoOnDragEnter ? "bgGreen" : undefined}`} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <div>Complete</div>
      <TodoList status={2} />
    </div>
  )
}

export default Complete