import React from "react";

function CategoryFilter({tasks, categories, handleCategory, selectedCategories}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((i, index) => {
         return <button 
         key={index} 
         value={i} 
         className={i === selectedCategories ? "selected" : "" } 
         onClick={handleCategory}>{i}</button>
      })}
    </div>
  );
}

export default CategoryFilter;
