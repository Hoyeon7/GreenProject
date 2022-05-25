

import './App.css';

import {useState} from 'react'





function App() {
  
  const [timer, setTimer] = useState("00:00:00");

   
  const [inputdata,setInputdata] = useState('')

  const [database,setDatabase] = useState([])

  const add = () => {
    setDatabase([...database, inputdata])
  }

  return (
    <div>

      <h1>오후 2:06:42</h1>
      <input type="text"
      value={inputdata} onChange={(e)=>setInputdata(e.target.value)}/>

      <button onClick={add}>추가</button>

      <h3>모든 수의 평균 : </h3>

      <ul>
        {database.map((item) => {
          return <li>{item}</li>
        })}
      </ul>
    </div>
  );
}


export default App;
