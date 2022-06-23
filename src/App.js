import './App.css';
import Header from './components/header/Header'
import Todos from './components/todos/Todos'
import Filter from './components/filter/Filter'
import AddTodo from './components/addtodo/AddTodo'

import {useState} from 'react'

function App() {
  const todos = [
    {id: 1, text: "simple todo", done: false},
    {id: 2, text: "trying to work", done: true},
    {id: 3, text: "I am trying to get it to work", done: false},
  ]

  const [todoArray, setTodos] = useState(todos)

  
  const toggleTodo = (id) => {
    const todoToToggle = todoArray.filter(todo => todo.id === id)
    const updatedTodo = {...todoToToggle, done: !todoToToggle.done}

    setTodos(todoArray.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo ))
  }

  const deleteTodo = (id) => {
    setTodos(todoArray.filter((todo) => todo.id !== id))
  }

  return (
    <>
      <Header />
      <Filter />
      <div className='container'>
        <div className='addtodo-container'>
          <p>You have {todoArray.length} todos left</p>
          <AddTodo />
        </div>
        <Todos 
          todos={todoArray} 
          onToggle={toggleTodo} 
          onDelete={deleteTodo}
        />
      </div>
   
    </>
  );
}

export default App;
