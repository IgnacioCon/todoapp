import Todo from './Todo'

const Todos = ({todos, onToggle}) => {
  return (
    <> 
      {todos.map( (todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          onToggle={onToggle}
        />
      ))}
    </>
  )
}


export default Todos;