import './App.css';
import Header from './component/Header';
import ToDoList from './component/TodoList';
function App() {
  
  return (
    <div className='App'>
      <div className='todo'>
      <Header title={"TODO APP"}/>
      <ToDoList/>
      </div>
    </div>
  )
  }

export default App;
