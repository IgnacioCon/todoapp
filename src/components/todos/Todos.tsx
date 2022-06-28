import ITodo from '../../interfaces/todo.interface';
import Todo from './Todo'

const Todos = ({todos, onToggle, onDelete}) => {
  return (
    <> 
      {todos.map( (todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </>
  )
}


export default Todos;