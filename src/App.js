import React, { useState} from "react";
import "./App.css";
import Task from "./Task";

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTaskText, setNewTaskText] = useState("");

  const addTask = () => {
    if (newTaskText.trim() === "") return; 

    const taskNumber = tasks.length + 1; 
    const newTask = {
      id: Date.now(),
      text: `Task ${taskNumber}: ${newTaskText}`,
      completed: false,
    };
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setNewTaskText(""); 
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask(); 
    }
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              text: `Task ${taskNumber(task.text)}: ${
                task.completed ? "Not Completed" : "Completed"
              }`,
            }
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks
        .filter((task) => task.id !== id)
        .map((task, index) => ({
          ...task,
          text: `Task ${index + 1}: ${task.text.split(":")[1]}`,
        }))
    );
  };

  
  const taskNumber = (text) => {
    return text.split(":")[0].split(" ")[1];
  };


  return (
    <div className="App">
      <h1 className="myText">To-do List</h1>
      <div className="task-list">
        <div className="task-form">
          <input
            type="text"
            placeholder="Add new task"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="bold-button" onClick={addTask}>
            ADD
          </button>
        </div>
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onDelete={deleteTask}
            onToggle={toggleTask}
            taskNumber={taskNumber(task.text)} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;