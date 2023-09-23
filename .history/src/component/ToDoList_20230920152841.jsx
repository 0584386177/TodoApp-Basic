import React from 'react';

const ToDoList = () => {
    const [todo,setTod]  = const [state, setstate] = useState(initialState);('');
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