import './App.css';
import Header from './components/header/Header';
import Todos from './components/todos/Todos';
import Filter from './components/filter/Filter';
import AddTodo from './components/addtodo/AddTodo';

import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const todosLeft = todos.reduce((a, b) => (b.done ? a : a + 1), 0);

  useEffect(() => {
    const getTodos = async () => {
      const todosFromServer = await fetchTodos();
      setTodos(todosFromServer);
    };
    getTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch('/todos');
    const data = await res.json();

    return data.map((todo) => ({
      id: todo._id,
      text: todo.text,
      done: todo.done,
    }));
  };

  const fetchTodo = async (id) => {
    const res = await fetch(`/todos/${id}`);
    const data = await res.json();

    return { id: data[0]._id, text: data[0].text, done: data[0].done };
  };

  const addTodo = async (text) => {
    const newTodo = { text: text, done: false };
    const res = await fetch('/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTodo),
    });

    const data = await res.json();

    setTodos([...todos, { id: data._id, text: data.text, done: data.done }]);
  };

  const toggleTodo = async (id) => {
    const todoToToggle = await fetchTodo(id);
    const updatedTodo = { ...todoToToggle, done: !todoToToggle.done };

    const res = await fetch(`/todos/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedTodo),
    });

    const data = await res.json();

    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: data.done } : todo
      )
    );
  };

  const deleteTodo = async (id) => {
    await fetch(`/todos/${id}`, {
      method: 'DELETE',
    });

    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const filterTodos = async (termToSearch) => {
    const searchTerm = termToSearch.toString().toLowerCase().trim();
    if (searchTerm === '') {
      setSearch(termToSearch);
      const res = await fetchTodos();
      setTodos(res);
      return null;
    }

    setSearch(termToSearch);
    const filtered = todos.filter((todo) =>
      todo.text.toLowerCase().includes(searchTerm)
    );
    setTodos(filtered);
  };

  const hideCompleted = async (hide) => {
    if (!hide) {
      const res = await fetchTodos();
      setTodos(res);
      return null;
    }

    const hidden = todos.filter((todo) => !todo.done);
    setTodos(hidden);
  };

  return (
    <>
      <Header />
      <Filter search={search} onFilter={filterTodos} onHide={hideCompleted} />
      <div className='container'>
        <div className='addtodo-container'>
          <p>
            You have {todosLeft} todo{todosLeft === 1 ? '': 's '} left
          </p>
          <AddTodo onAdd={addTodo} />
        </div>
        <Todos todos={todos} onToggle={toggleTodo} onDelete={deleteTodo} />
      </div>
    </>
  );
}

export default App;
