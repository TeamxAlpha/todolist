import React, { useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import './App.css';
import {TaskProvider, useTaskContext} from './context/notes/NoteContext';
import HoverDialog from './components/HoverDialogBox';

function App() {
  const {tasks, setTasks} = useTaskContext();
  const [newTask, setNewTask] = useState('');
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
    setNewTask(task);
    setSelectedTask(task);
  };

  const cutTask = (task) => {
    setTasks((tasks) => 
    tasks.map((item)=>
    item === task ? newTask : item
      )
    );
  };

  const saveEditedTask = () => {
    setTasks((tasks) => tasks.map((item) => (item === selectedTask ? newTask : item)));
    setNewTask('');
    setSelectedTask('');
  };

  return (
    <div className="App">
      <h1>📝 Todo App</h1>
      <TaskInput
        value={newTask}
        onChange={handleInputChange}
        onAddTask={addTask}
        isEditMode={!!selectedTask}
        onEditTask={saveEditedTask}
      />
        < HoverDialog/>
      <ol>
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index+1}
            deleteTask={deleteTask}
            editTask={editTask}
            cutTask={cutTask}
          />
        ))}
      </ol>
    </div>
  );
}




function AppWrapper( ){
  return(
  <TaskProvider>
    <App/>
  </TaskProvider>
)
}
export default AppWrapper;
