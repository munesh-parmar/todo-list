import React from "react";
import "./App.css";
const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.completed ? "completed" : ""}`}>
      <div className="task-text" onClick={() => onToggle(task.id)}>
        {task.text}
      </div>
      <div className="task-delete" onClick={() => onDelete(task.id)}>
        &#x2715;
      </div>
    </div>
  );
};

export default Task;