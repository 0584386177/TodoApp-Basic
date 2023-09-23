import React from "react";

const TodoForm = (props) => {
  const { todos, valueTask, handleSubmit, handleOnchange,handleDeleTodo,handleEditTodo } = props;

  return (
    <>
      <form onSubmit={handleSubmit} className="todo-form">
        <input
          className="todo-add"
          type="text"
          placeholder="Enter your todo...."
          value={valueTask}
            onChange={handleOnchange}
        />
        <button type="submit" className="todo-submit">
          ADD TODO
        </button>
      </form>
      <div className="todo-tasks">
        {todos.map((item, index) => {
          return (
            <div  key={index} className="todo-task">
              <input value={item} type="text" />
              <div className="todo-task-features">
                <i onClick={handleEditTodo} className="todo-btnEdit fa-solid fa-pen-to-square"></i>
                <i onClick={()=>handleDeleTodo(index)} className="todo-btnRemove  fa-solid fa-x"></i>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default TodoForm;
