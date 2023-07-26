// context/notes/NoteContext.js
import React, { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

const useLocalStorage = (key, initialValue) => {
  const storedValue = localStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [value, setValue] = useState(initial);
  
  localStorage.setItem(key, JSON.stringify(value, key));
  return [value, setValue];
};

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  // Fetch tasks from local storage when the component mounts
  const [tasks, setTasks] = useLocalStorage('tasks', []);

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
