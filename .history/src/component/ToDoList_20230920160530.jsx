import React,{useState} from 'react';
import { Button } from 'react-bootstrap';


const ToDoList = () => {
    const [todo,setTodo]  = useState('');
    const [todos,setTodos] = useState([]);
    console.log(todos);
    const handleInputValue =  (e)=>{
            setTodo(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodos(([...todos,todo]));
    }
    return (
        <div>
            <form>
                <input onChange={handleInputValue} name='todo' placeholder='Add a todo...' />
                <button onClick={handleSubmit}>ADD TODO</button>
                
                <ul>
                  {todos.map((item,index)=>{
                    return <li key={index}>{item}</li>
                  })}
                </ul>
                <Button variant="primary">Primary</Button>{' '}
      <Button variant="secondary">Secondary</Button>{' '}
      <Button variant="success">Success</Button>{' '}
      <Button variant="warning">Warning</Button>{' '}
      <Button variant="danger">Danger</Button>{' '}
      <Button variant="info">Info</Button>{' '}
      <Button variant="light">Light</Button>{' '}
      <Button variant="dark">Dark</Button>
      <Button variant="link">Link</Button>
            </form>
        </div>  

    )
};

export default ToDoList;