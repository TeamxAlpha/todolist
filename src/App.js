import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [selectedTask, setSelectedTask] = useState('');
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
    setTasks((tasks) => tasks.filter((item) => item !== task));
  };

  const editTask = (task) => {
    setEditMode(true);
    setNewTask(task);
    setSelectedTask(task);
  };

  const saveEditedTask = () => {
    setTasks((tasks) => tasks.map((item) => (item === selectedTask ? newTask : item)));
    setNewTask('');
    setEditMode(false);
  };

  return (
    <div className="App">
      <h1 style={{ color: 'white' }}>Todo App</h1>
      <TaskInput
        value={newTask}
        onChange={handleInputChange}
        onAddTask={addTask}
        isEditMode={editMode}
        onEditTask={saveEditedTask}
      />
      <ol>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </ol>
    </div>
  );
}

export default App;
