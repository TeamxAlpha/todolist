import React, { useState } from 'react';

function TaskItem  ({ task, index, deleteTask, editTask}) {

  const [check, setcheck] = useState (false);

  let className = check ? "cut" : "";

  return (
    <div className="container">
    <input type="checkbox" onClick={()=> setcheck(!check)} ></input>
    <li className={className}  onClick={() => editTask(task)}>
      {index}.{task}
      <div className="listitems">
      {/* <button className="btn" >🖊️</button> */}
      <img src="https://cdn-icons-png.flaticon.com/128/1159/1159633.png" onClick={() => editTask(task)} class="edit" alt="Edit" data-id="2"></img>
      {/* <button className="btn" onClick={() => deleteTask(task)}>🗑️</button> */}
      <img src="https://cdn-icons-png.flaticon.com/128/3096/3096673.png"onClick={() => deleteTask(task)} class="delete" alt="delete" data-id="2"></img>
      </div>

    </li>
    </div>  );

}

export default TaskItem;

