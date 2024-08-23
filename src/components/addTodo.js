import React, { useState } from "react";

function TodoForm({addTodo}) {
  const [task, setTask] = useState("");
  const [status, setStatus] = useState("Not Started");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;
    addTodo(task, status);
    setTask("");
    setStatus("Not Started");
    window.location.reload()
  };

  return (
    <div className="add-todo-form">
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add a task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Not Started">Not Started</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default TodoForm;
