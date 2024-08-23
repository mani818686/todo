import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function TodoList() {
  const [todos, setTodos] = useState([]);
    const [statusOptions] = useState(["Not started", "In Progress", "Completed"]);
  const handleStatusChange = async (id, newStatus) => {
    try {
      await axios.patch(`http://127.0.0.1:8000/api/todos/${id}/`, {
        status: newStatus,
      });
      fetchTodos();
    } catch (error) {
      console.error("Error updating todo status:", error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/todos/');
      setTodos(response.data);
    } catch (error) {
      console.error('Error fetching todos:', error);
    }
  };

  return (
    <div className="todo-list">
        {todos.map(todo => (
          <ol key={todo.id} className="todo-item">
            <div style={{width:'100px'}}>{todo.task}</div>
            <select
              value={todo.status}
              onChange={(e) => handleStatusChange(todo.id, e.target.value)}
            >
              {statusOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </ol>
        ))}
      </div>
  );
}

export default TodoList;
