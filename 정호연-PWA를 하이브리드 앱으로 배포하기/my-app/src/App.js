import React from 'react';
import logo from './logo.svg';
import './App.css';

import { useState } from 'react'

function App() {

  const [ inputText,setInputText ] = useState("")

  const onChange = (e) => {
    setInputText(e.target.value)
  }


  return (
    <div className="App">

    <h1>Home</h1>

    <p>당신의 이름은 무엇입니까?</p>

    <input type="text" value={inputText} onChange={onChange} />

    <h4>반갑습니다 {inputText}님</h4>

    </div>
  );
}

export default App;
