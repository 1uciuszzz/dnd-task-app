import React, { DragEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { changeStatus } from '../../../api/todoAPIs'
import { useAppDispatch } from '../../../store'
import { changeStatusHandler } from '../../../store/slices/todoSlice'
import Button from '../Button/Button'
import NewTodo from '../NewTodo/NewTodo'
import TodoList from '../TodoList/TodoList'
import "./index.scss"

const Prepare = () => {
  const [showCreate, setShowCreate] = useState(false)
  const [todoOnDragEnter, setTodoOnDragEnter] = useState(false)
  const dispatch = useAppDispatch()
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
    dispatch(changeStatusHandler({ id: todoId, status: 0 }))
    changeStatus(todoId, 0).then(r => {
      toast.success(r.data.msg)
    })
  }
  const handleCreateTodoInput = () => {
    setShowCreate(true)
  }
  return (
    <div className={`prepareContainer ${todoOnDragEnter ? "bgRed" : undefined}`} onDragEnter={handleDragEnter} onDragOver={handleDragOver} onDragLeave={handleDragLeave} onDrop={handleDrop}>
      <div>Prepare</div>
      <TodoList status={0} />
      {showCreate && <NewTodo setShowCreate={setShowCreate} />}
      <Button disabled={showCreate} click={handleCreateTodoInput} value={"➕"} type={"primary"} style={{ height: "50px", width: "50px", borderRadius: "25px", margin: "0 auto" }} />
    </div>
  )
}

export default Prepare