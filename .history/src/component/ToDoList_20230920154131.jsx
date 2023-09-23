import React,{useState} from 'react';

const ToDoList = () => {
    const [todo,setTodo]  = useState('');
    const [todos,setTodos] = useState([]);
    const handleInputValue =  (e)=>{
            setTodo(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.prevent
        console.log(123);
    }
    return (
        <div>
            <form>
                <input onChange={handleInputValue} name='todo' placeholder='Add a todo...' />
                <button onClick={handleSubmit}>ADD TODO</button>
                
                <ul>
                   {todos.map((item,index)=>{
                    <li>{todos.push([...todo,item])}</li>
                   })}
                </ul>

            </form>
        </div>

    )
};

export default ToDoList;