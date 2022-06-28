import { FaTimes } from 'react-icons/fa'

const Todo = ({todo, onToggle, onDelete}) => {
  return (
    <div className="todo">
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)}/>
      <h4 className={`todo-text ${todo.done ? 'completed': ''}`}>{todo.text}</h4>
      <FaTimes
        style={{color: 'red', cursor: 'pointer'}}
        onClick={() => onDelete(todo.id)}
      />
    </div>
  )
} 

export default Todo;