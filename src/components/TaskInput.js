
import React from 'react';

function TaskInput({ value, onChange, onAddTask, isEditMode, onEditTask }) {


  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    if (isEditMode) {
      onEditTask();
    } else {
      onAddTask();
    }
  };
  return (
    <form onSubmit={handleSubmit}>
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
    </form>
  );
}

export default TaskInput;
