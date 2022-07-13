import React from 'react'
import { TodoItem } from '../../components/TodoItem'
import { TodoListProvider } from '../../context/todoListContext'

export const BodyContainer = () => {
  return (
    <div>
      <TodoItem />
    </div>
  )
}
