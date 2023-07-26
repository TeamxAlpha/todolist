// components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, index, deleteTask, editTask, cutTask }) => {
  const handleCheckboxChange = () => {
    cutTask(task);
  };

  return (
    <li>
      <input className="Checkbox"
        type="checkbox"
        checked={task.isCompleted}
        onChange={handleCheckboxChange}
      />
      <span
        style={{ textDecoration: task.isCompleted ? 'line-through' : 'none' }}
      >
        {task.taskName}
      </span>
      <div className="listitems">
    
    <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" onClick={() => editTask(task.taskName)} className="edit" alt="Edit" data-id="2"></img>

    <img src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"onClick={() => deleteTask(task.taskName)} className="delete" alt="delete" data-id="2"></img>
    </div>
    </li>
  );
};

export default TaskItem;
