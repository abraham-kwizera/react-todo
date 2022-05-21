import React from "react";

const Form = ({setInputText}) =>{
  // JS code 
const inputTextHandler = (e) => {
  console.log(e.target.value)
  setInputText(e.target.value)
}
    return(
<form>
      <input type="text" className="todo-input" onChange={inputTextHandler}/>
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
    );
}

export default Form;