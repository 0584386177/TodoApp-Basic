import {React, useState} from "react";

import './App.css';
import Header from './component/Header';
import TodoForm from './component/TodoForm';

function App() {
  const [value,setValue] = useState(" ");
  const [values,setValues] = useState([]);//[123,456]
  const handleSubmit = (e)=>{
    e.preventDefault();
      setValues([...values,value]);
      setValue("");
    
  }

  const handleOnchange = (e)=>{
    setValue(e.target.value);
  }

  // const handleEditTodo  = (e)=>{
  
  // }
  
  const handleDeleTodo  = (i)=>{
      const updateValues = values.filter((item,index)=> {
        if(index ===i){
          return false;
        }else{
          return true;
        }
      });

      setValues(updateValues);
  }
  return (
    <div className='App'>
      <div className='todo'>
        <Header title={"TODO APP"}/>
        <TodoForm handleDeleTodo = {handleDeleTodo}  todos ={values} valueTask ={value} handleOnchange={handleOnchange} handleSubmit={handleSubmit}/>
      </div>
    </div>
  )
  }

export default App;
