import React, { useState } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');

    }
  };

  const deleteTask = (task) => {
    setTasks((tasks)=> tasks.filter((item)=>item !== task)
    )
    // console.log(task);
  };

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <div>
        <input
          type="text"
          value={newTask}
          onChange={handleInputChange}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(task)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
