import React from "react";

function TaskList({ tasks, toggleTask, deleteTask }) {
  return (
    <ul className="task-list">
      {tasks.map((task, index) => (
        <li key={index} className="task-item">
          <div>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleTask(index)}
            />
            <span className={task.completed ? "completed" : ""}>
              {task.text}
            </span>
          </div>
          <button className="delete-btn" onClick={() => deleteTask(index)}>✕</button>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
