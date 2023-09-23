import React,{useState} from 'react';

const ToDoList = () => {
    const [todo,setTodo]  = useState('');
    const [todos,setTodos] = useState([]);
    const handleInputValue =  (e)=>{
            setTodo(e.target.value);
    }
    return (
        <div>
            <form>
                <input onChange={handleInputValue} name='todo' placeholder='Add a todo...' />
                <button>ADD TODO</button>
                
                <ul >
                   {todos.map((item,index)=>{
                    <li></li>
                   })}
                </ul>

            </form>
        </div>

    )
};

export default ToDoList;