import { createContext, useContext, useState } from 'react';

const TaskContext = createContext();

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [filteredTasks, setFilteredTasks] = useState([]); // Adding filteredTasks state here

  // Rest of the context logic...

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        filteredTasks, // Make sure to provide filteredTasks here
        setFilteredTasks, // Make sure to provide setFilteredTasks here
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
