import React, { DragEvent, useState } from 'react'
import { toast } from 'react-toastify'
import { changeStatus } from '../../../api/todoAPIs'
import { Todo } from '../../../interfaces'
import { useAppDispatch, useAppSelector } from '../../../store'
import { changeStatusHandler } from '../../../store/slices/todoSlice'
import TodoItem from '../TodoItem/TodoItem'
import "./index.scss"

const TodoList = ({ status }: { status: number }) => {
  const dispatch = useAppDispatch()
  const todos = useAppSelector((state) => {
    return state.todo.todos.filter((todo: Todo) => todo.status === status)
  })
  // const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  // }
  // const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  // }
  // const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  // }
  // const handleDrop = (e: DragEvent<HTMLDivElement>) => {
  //   e.preventDefault()
  //   const todoId = e.dataTransfer.getData("todoItemId")
  //   dispatch(changeStatusHandler({ id: todoId, status: status }))
  //   changeStatus(todoId, status).then(r => {
  //     toast.success(r.data.msg)
  //   })
  // }
  return (
    <div className="todoList">
      {todos.map((todo: Todo) => {
        return <TodoItem todoItem={todo} key={todo._id} />
      })}
    </div>
  )
}

export default TodoList