import { FaTimes } from 'react-icons/fa'
import {useState} from 'react'

const Todo = ({todo, onToggle}) => {
  
  return (
    <div className="todo">
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)}/>
      <h4 className={`todo-text ${todo.done ? 'completed': ''}`}>{todo.text}</h4>
      <FaTimes
        style={{color: 'red', cursor: 'pointer'}}
      />
    </div>
  )
} 

export default Todo;