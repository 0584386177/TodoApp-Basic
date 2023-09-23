import React from 'react';

const ToDoList = () => {
    return (
        <div>
            <form>
                <input name='todo' placeholder='Add a todo...' />
                <button>ADD TODO</button>
            </form>
        </div>
    );
};

export default ToDoList;