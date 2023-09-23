import React, { useState } from "react";
import Button from "react-bootstrap/Button";

const ToDoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  console.log(todos);
  const handleInputValue = (e) => {
    setTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
  };
  return (
    <div>
      <form  className="todo-form">
        <input className="todo-"
          onChange={handleInputValue}
          name="todo"
          placeholder="Add a todo..."
        />
        <Button onClick={handleSubmit} variant="success">
          ADD TODO
        </Button>
        <ul>
          {todos.map((item, index) => {
            return (
               <div key={index}>
               <li  style={{listStyleType:"none"}}>{item}</li>
               </div>
            )

          })}
        </ul>
      </form>
    </div>
  );
};

export default ToDoList;