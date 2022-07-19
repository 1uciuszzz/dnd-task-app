import React, { useEffect } from 'react'
import { getTodos } from '../api/todoAPIs';
import TodoLayout from '../components/container/TodoLayout/TodoLayout'
import { getTodosHandler } from '../store/slices/todoSlice';
import { useAppDispatch } from './../store/index';
import { toast } from "react-toastify"

const Todo = () => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    getTodos().then(res => {
      dispatch(getTodosHandler(res.data.todos))
      toast.success(res.data.msg)
    }).catch(err => {
      console.log(err);
    })
  }, [])
  return (
    <><TodoLayout /></>
  )
}

export default Todo