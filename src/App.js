import React, { useState} from 'react';
import TaskItem from './components/TaskItem';
import TaskInput from './components/TaskInput';
import FilterButton from './components/FilterButton';
import './App.css';
import { TaskProvider, useTaskContext } from './context/notes/NoteContext';
import { useEffect } from 'react';

function App() {
  const { tasks, setTasks } = useTaskContext();
  const [newTask, setNewTask] = useState('');
  const [selectedTask, setSelectedTask] = useState('');
  const [filter, setFilter] = useState('all');
  const [showFilterDialog, setShowFilterDialog] = useState(false);

  const handleInputChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { taskName: newTask, isCompleted: false }]);
      setNewTask('');
    }
  };

  const deleteTask = (taskName) => {
    setTasks((tasks) => tasks.filter((task) => task.taskName !== taskName));
  };

  const editTask = (taskName) => {
    setNewTask(taskName);
    setSelectedTask(taskName);
  };

  const cutTask = (task) => {
    setTasks((tasks) =>
      tasks.map((item) =>
        item === task ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const saveEditedTask = () => {
    setTasks((tasks) =>
      tasks.map((item) => (item.taskName === selectedTask ? { ...item, taskName: newTask } : item))
    );
    setNewTask('');
    setSelectedTask('');
  };

  const handleFilterClick = () => {
    setShowFilterDialog(!showFilterDialog);
  };
  const handleFilterOptionClick = (filterType) => {
    setFilter(filterType);
    setShowFilterDialog(false);
  };


  useEffect(()=>{
    localStorage.getItem('tasks',JSON.stringify(tasks))
  },[])

  
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.isCompleted;
    if (filter === 'non-completed') return !task.isCompleted;
    return true;
  });

  return (
    <div className="App">
      <h1>📝 Todo-List</h1>
      <TaskInput
        value={newTask}
        onChange={handleInputChange}
        onAddTask={addTask}
        isEditMode={!!selectedTask}
        onEditTask={saveEditedTask}
      />
        
      <div style={{ position: 'relative' }}>
        {showFilterDialog && (
          <div className="FilterDialog">
            <FilterButton label="All Tasks" onClick={() => handleFilterOptionClick('all')} />
            <FilterButton label="Completed" onClick={() => handleFilterOptionClick('completed')} />
            <FilterButton
              label="Non-Completed"
              onClick={() => handleFilterOptionClick('non-completed')}
            />
          </div>
        )}
      </div>
      <ol>
        {filteredTasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index + 1}
            deleteTask={deleteTask}
            editTask={editTask}
            cutTask={cutTask}
          />
        ))}
      </ol>
      <button className="FilterButton" onClick={handleFilterClick}>Filter</button>
    </div>
  );
  
}

function AppWrapper() {
  return (
    <TaskProvider>
      <App />
    </TaskProvider>
  );
}

export default AppWrapper;