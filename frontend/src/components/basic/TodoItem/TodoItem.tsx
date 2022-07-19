import React, { DragEvent } from 'react'
import { toast } from 'react-toastify'
import { deleteTodo } from '../../../api/todoAPIs'
import { Todo } from '../../../interfaces/index'
import { useAppDispatch } from '../../../store'
import { deleteTodoHandler } from '../../../store/slices/todoSlice'
import "./index.scss"

const TodoItem = ({ todoItem }: { todoItem: Todo }) => {
  const dispatch = useAppDispatch()
  const handleDragStart = (e: DragEvent<HTMLDivElement>) => {
    e.dataTransfer.setData("todoItemId", todoItem._id)
  }
  const handleDragEnd = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
  }
  const handleDeleteTodo = () => {
    deleteTodo(todoItem._id).then(res => {
      dispatch(deleteTodoHandler({ id: todoItem._id }))
      toast.success(res.data.msg)
    })
  }
  return (
    <div className='todoItem' draggable onDragStart={handleDragStart} onDragEnd={handleDragEnd}>
      {todoItem.title}
      <div onClick={handleDeleteTodo} className='deleteIcon'>❌</div>
    </div>
  )
}

export default TodoItem