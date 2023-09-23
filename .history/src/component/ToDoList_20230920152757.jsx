import React from 'react';

const ToDoList = () => {
    const []
    const handleInputValue =  (e)=>{
        console.log(e.target.value);
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