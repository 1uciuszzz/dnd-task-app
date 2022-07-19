import React, { DragEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { changeStatus } from '../../../api/todoAPIs'
import { useAppDispatch } from '../../../store'
import { changeStatusHandler } from '../../../store/slices/todoSlice'
import TodoList from '../TodoList/TodoList'
import "./index.scss"

const Learning = () => {
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
    dispatch(changeStatusHandler({ id: todoId, status: 1 }))
    changeStatus(todoId, 1).then(r => {
      toast.success(r.data.msg)
    })
  }
  return (
    <div className={`learningContainer ${todoOnDragEnter ? "bgBlue" : undefined}`} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <div>Learning</div>
      <TodoList status={1} />
    </div>
  )
}

export default Learning