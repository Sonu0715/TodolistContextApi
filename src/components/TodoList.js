import React from 'react'
import TodoItem from './TodoItem'
import { TodoContext } from '../context/TodoProvider'

const TodoList = () => {
  return (
    <div>
        <TodoContext.Consumer>
            {state => state.todoList.map((todo) => <TodoItem key={todo.id} todo={todo}/>)}
        </TodoContext.Consumer>
    </div>
  )
}

export default TodoList