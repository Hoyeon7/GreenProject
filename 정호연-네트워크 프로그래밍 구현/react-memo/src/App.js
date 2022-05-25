

import './App.css';


import {useState} from 'react'
// useState 기능을 사용하기 위해 리엑트에서 useState 를 가져옴

import TodoBoard from './components/TodoBoard'
// TodoBoard와 app.js를 연결함



function App() {


  const [inputValue,setInputValue] = useState('')
  // inputValue useState 저장소 생성

  const [todoList,setTodoList]= useState([])
    // todoList useState 저장소 생성

  const addItem = () => {
    setTodoList([...todoList,inputValue])
  }
  // addItem 변수에 할당 한다 =  화살표함수가 실행될경우=>{setTodoList를 통해([todoList저장소에 inputValue데이터를 추가])}


  return (
    <div className="App">
      
      <h1>메모</h1>

      <input value={inputValue}
      type="text"
      onChange={(event)=> setInputValue(event.target.value)}></input>
      {/*inputValue저장소의 데이터값이 곧 input입력창의 데이터이다,
      입력창 타입은 text,
      데이터를 항상 업데이트한다={(입력창에 입력된값을 event라는 매개변수로 전달) => setInputValue통해 inputValue 값 추가(event매개변수로 받은 value를) }*/}
      
      <button onClick={addItem}>추가</button>
      {/*버튼을 누를경우 addItem 실행*/}

      <TodoBoard todoList={todoList} />
      {/*TodoBoard에  todoList라는 이름으로 todoList useState저장소 데이터값을 전송함*/}

    </div>
  );
}

export default App;
