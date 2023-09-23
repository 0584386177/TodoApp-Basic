import './App.css';
import Header from './component/Header';
import ToDoList from './component/TodoList';
function App() {
  
  return (
    <div className='App'>
      <Header title={"TODO APP"}/>
      <ToDoList/>
    </div>
  )
  }

export default App;
