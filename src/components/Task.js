import React from "react";

function Task({task, text, category, handleTaskDelete}) {

  
  function deletedSelected(){
    handleTaskDelete(task)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button className="delete" onClick={deletedSelected}>X</button>
    </div>
  );
}

export default Task;