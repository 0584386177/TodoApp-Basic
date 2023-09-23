import './App.css';
import Header from './component/Header';
import { toBeInTheDOM } from '@testing-library/jest-dom/matchers';
function App() {
  
  return (
    <div className='App'>
      <Header title={"TODO APP"}/>

    </div>
  )
  }

export default App;
