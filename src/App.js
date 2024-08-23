import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TodoForm from './components/addTodo';
import TodoList from './components/todoList';
import "./App.css"
function App() {
  const [todos, setTodos] = useState([]);
  const url = "http://127.0.0.1:8000/api/todos/"
  useEffect(() => {
    axios.get(url)
      .then(response => setTodos(response.data))
      .catch(error => console.error(error));
  }, []);

  const addTodo = (task, status) => {
    axios.post(url, { task, status })
      .then(response => setTodos([...todos, response.data]))
      .catch(error => console.error(error));
  };

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
