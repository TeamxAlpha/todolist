

import React from 'react';

function TaskItem({ task, index, deleteTask, editTask }) {
  return (
    <li onClick={() => editTask(task)}>
      {index}. {task}
      <button onClick={() => deleteTask(task)}>Delete</button>
    </li>
  );
}

export default TaskItem;

