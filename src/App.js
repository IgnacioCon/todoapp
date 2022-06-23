import './App.css';
import Header from './components/header/Header'
import Todos from './components/todos/Todos'
import Filter from './components/filter/Filter'
import AddTodo from './components/addtodo/AddTodo'

import {useEffect, useState} from 'react'

function App() {
  const todos = [
    {id: 1, text: "simple todo", done: false},
    {id: 2, text: "trying to work", done: true},
    {id: 3, text: "I am trying to get it to work", done: false},
  ]

  const [todoArray, setTodos] = useState(todos)
  const [leftTodo, setLeftTodo] = useState(0)

  useEffect(() => {
    setLeftTodo(todosLeft())
  }, [todoArray])

  const addTodo = (text) => {
    const newID = todoArray[todoArray.length -1].id + 1
    const newTodo = {id: newID, text: text, done: false}
    setTodos([...todoArray, newTodo])
  }
  const toggleTodo = (id) => {
    const todoToToggle = todoArray.filter(todo => todo.id === id)
    const updatedTodo = {...todoToToggle, done: !todoToToggle.done}

    setTodos(todoArray.map((todo) => todo.id === id ? {...todo, done: !todo.done} : todo ))
  }

  const deleteTodo = (id) => {
    setTodos(todoArray.filter((todo) => todo.id !== id))
  }

  const todosLeft = () => {
    return todoArray.reduce((sum, el) => el.done ? sum : sum+1, 0)
  }

  return (
    <>
      <Header />
      <Filter />
      <div className='container'>
        <div className='addtodo-container'>
          <p>You have {leftTodo} todos left</p>
          <AddTodo onAdd={addTodo} />
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
