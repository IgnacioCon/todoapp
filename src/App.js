import './App.css';
import Header from './components/header/Header'
import Todos from './components/todos/Todos'
import Filter from './components/filter/Filter'
import AddTodo from './components/addtodo/AddTodo'

function App() {
  const todos = [
    {text: "simple todo"},
    {text: "trying to work"},
    {text: "I am trying to get it to work"},
  ]
  return (
    <>
      <Header />
      <Filter />
      <div className='container'>
        <div className='addtodo-container'>
          <p>You have 2 todos left</p>
          <AddTodo />
        </div>
        <Todos todos={todos} />
      </div>
   
    </>
  );
}

export default App;
