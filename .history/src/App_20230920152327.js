import './App.css';
import Header from './component/Header';
import ToDoList from './TodoList';
function App() {
  
  return (
    <div className='App'>
      <Header title={"TODO APP"}/>
      <ToDoList/>
    </div>
  )
  }

export default App;
