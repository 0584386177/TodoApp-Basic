import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

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
                <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
                <Button onClick={handleSubmit} variant="success">ADD TODO</Button>{' '}

                <ul>
                  {todos.map((item,index)=>{
                    return <li key={index}>{item}</li>
                  })}
                </ul>
                
            </form>
        </div>  

    )
};

export default ToDoList;