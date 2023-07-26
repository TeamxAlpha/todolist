// components/TaskInput.js
import React from 'react';

const TaskInput = ({ value, onChange, onAddTask, isEditMode, onEditTask }) => {
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      if (isEditMode) {
        onEditTask();
      } else {
        onAddTask();
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onKeyDown={handleKeyDown}
        placeholder="Add a new task..."
      />
      <button onClick={isEditMode ? onEditTask : onAddTask}>
        {isEditMode ? 'Save' : 'Add'}
      </button>
  
    </div>
  );
};

export default TaskInput;
