import React, { useState } from "react";

function TaskInput({ addTask }) {
  const [taskText, setTaskText] = useState("");

  const handleAdd = () => {
    addTask(taskText);
    setTaskText("");
  };

  return (
    <div style={{ display: "flex", marginBottom: "1rem" }}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        style={{ flex: 1, marginRight: "0.5rem", padding: "0.5rem" }}
      />
      <button onClick={handleAdd}>Add Task</button>
    </div>
  );
}

export default TaskInput;
