import React,{useState} from 'react';

const ToDoList = () => {
    const [todo,setTodo]  = useState('');
    const [todos,setTodos] = useState([]);
    const handleInputValue =  (e)=>{
            setTodo(e.target.value);
    }
    return (
        <div>
            <div>
                <input onChange={handleInputValue} name='todo' placeholder='Add a todo...' />
                <button>ADD TODO</button>
                
                <ul style={{marginTop:20}}>
                   {todos.map((item,index)=>{
                   
                    
                   })}
                </ul>

            </div>
        </div>
    );
};

export default ToDoList;