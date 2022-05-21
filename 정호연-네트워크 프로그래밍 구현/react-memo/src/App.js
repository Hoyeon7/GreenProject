

import './App.css';

import {useState} from 'react'

import TodoBoard from './components/TodoBoard'



function App() {

  const [inputValue,setInputValue] = useState('')

  const [todoList,setTodoList]= useState([])

  const addItem = () => {
    setTodoList([...todoList,inputValue])
  }


  return (
    <div className="App">
      
      <h1>메모</h1>

      <input value={inputValue}
      type="text"
      onChange={(event)=> setInputValue(event.target.value)}></input>
      
      <button onClick={addItem}>추가</button>

      <TodoBoard todoList={todoList} />

    </div>
  );
}

export default App;
