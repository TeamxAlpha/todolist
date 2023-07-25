
import React from 'react';

function TaskInput({ value, onChange, onAddTask, isEditMode, onEditTask,onFilterChange  }) {


  const handleSubmit = (event) => {
    event.preventDefault(); 
    if (isEditMode) {
      onEditTask();
    } else {
      onAddTask();
    }
  };
  const handleFilterClick = (filterValue) => {
    onFilterChange(filterValue);
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
      
      <div class="dropdown">
  <button class="dropbtn">Filter</button>
  <div class="dropdown-content">
          <p onClick={() => handleFilterClick('all')}>All Tasks</p>
          <p onClick={() => handleFilterClick('completed')}>Completed</p>
          <p onClick={() => handleFilterClick('tbd')}>TBD</p>
  </div>
</div>
    </form>
  );
}

export default TaskInput;
