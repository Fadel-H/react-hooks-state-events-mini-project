import React from "react";
import Task from "./Task";

function TaskList({selectedCategories, task, setIsTask}) {
  let displayTask = [...task]

    if (selectedCategories !== "All"){
      displayTask = task.filter((task)=> task.category === selectedCategories)
    }

  function handleTaskDelete(selectedTask){
    setIsTask(task.filter((task)=> selectedTask.text !== task.text))
  }

  return (
    <div className="tasks">
      {displayTask.map((i,index) =>{ 
      return  <Task
      task = {i} 
      key= {index} 
      text={i.text} 
      category={i.category}
      handleTaskDelete={handleTaskDelete}/>})}
    </div>
  );
}

export default TaskList;
