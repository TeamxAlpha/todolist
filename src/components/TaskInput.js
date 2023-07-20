


import React from 'react';

function TaskInput({ value, onChange, onAddTask, isEditMode, onEditTask }) {
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Enter a new task"
      />
      {isEditMode ? (
        <button onClick={onEditTask}>Edit</button>
      ) : (
        <button onClick={onAddTask}>Add</button>
      )}
    </div>
  );
}

export default TaskInput;
