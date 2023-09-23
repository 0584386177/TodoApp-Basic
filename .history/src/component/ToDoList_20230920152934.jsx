import React,{useState} from 'react';

const ToDoList = () => {
    const [todo,setTodo]  = useState('');
    const handleInputValue =  (e)=>{
            setTodo
    }
    return (
        <div>
            <form>
                <input onChange={handleInputValue} name='todo' placeholder='Add a todo...' />
                <button>ADD TODO</button>
            </form>
        </div>
    );
};

export default ToDoList;