import React , {useState} from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [selectedCategories, setSelectedCategories] = useState("All")
  const [isTask, setIsTask] = useState([...TASKS])
  

  function handleCategory(e){
    setSelectedCategories(e.target.value)
  }

  function onTaskFormSubmit (newTask){
    setIsTask([...isTask,newTask])
  }
 


  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter  
      tasks={TASKS} 
      categories={CATEGORIES} 
      handleCategory={handleCategory}
      selectedCategories= {selectedCategories}/>
      <NewTaskForm 
      CATEGORIES={CATEGORIES}
      onTaskFormSubmit={onTaskFormSubmit}
      />
      <TaskList 
       selectedCategories={selectedCategories}
       task={isTask}
       setIsTask={setIsTask}
       />
    </div>
  );
}

export default App;
