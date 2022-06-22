import { FaTimes } from 'react-icons/fa'

const Todo = ({todo}) => {
  return (
    <div className="todo">
      <input type="checkbox" />
      <h4>{todo.text}</h4>
      <FaTimes
        style={{color: 'red', cursor: 'pointer'}}
      />
    </div>
  )
} 

export default Todo;