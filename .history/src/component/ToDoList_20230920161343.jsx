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
      <form>
        <input
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
                <li key={index}>{item}</li>
                <button></button>
            )

          })}
        </ul>
      </form>
    </div>
  );
};

export default ToDoList