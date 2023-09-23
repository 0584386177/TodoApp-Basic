import React from 'react';

const ToDoList = () => {
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