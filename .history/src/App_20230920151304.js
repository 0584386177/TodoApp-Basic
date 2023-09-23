import { useState } from 'react';
import './App.css';
import ToDo from "./component/ToDo.jsx";
function App(props) {
  const {title} = props;
  return (
    <div className='App'>
    <h1></h1>
    <ToDo/>
    </div>
  )
  }

export default App;
