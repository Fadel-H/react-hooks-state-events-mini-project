import React, {useState} from "react";



function NewTaskForm({CATEGORIES, onTaskFormSubmit}) {
  const [newTask, setNewTask] = useState({
    text:"",
    category:""
  })
  

  function handleChange(e){
    setNewTask({...newTask,[e.target.name]: e.target.value})
  }

  function handleOnSubmit(e){
    e.preventDefault()
    onTaskFormSubmit(newTask)
  }

  return (
    <form className="new-task-form" onSubmit={handleOnSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={handleChange} />
      </label>
      <label>
        Category
        <select name="category" onChange={handleChange}>
          {CATEGORIES.map((i, index) => {
            return <option 
            key={index} 
            value={i}
            name ="category"
            >{i !== "All" ? i : false}</option>
          })}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
