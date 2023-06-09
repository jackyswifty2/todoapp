/* eslint-disable */
import React, { useEffect, useState } from 'react';
import './App.css';
import Form from './Component/Form';
import ToDoList from './Component/ToDoList';
function App() {
  const [inputText, setInputText] = useState('')
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [errorText, setErrorText] = useState('');
  
  
  useEffect(() => {
    filterHandler();
  }, [todos, status]);

  
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  return (
    <div className="App">
      <header>

        <h1>my first todo app</h1>

      </header>

      <Form todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setInputText={setInputText}
        setStatus={setStatus}
        setErrorText={setErrorText}
         />

        <p className='error'>{errorText}</p>

      <ToDoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}  />

    </div>
  );
}

export default App;
