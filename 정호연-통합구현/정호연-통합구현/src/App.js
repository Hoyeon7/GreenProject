

import { Route, Routes, NavLink } from 'react-router-dom'

import './App.css';

import Home from './components/Home'
import About from './components/About'
import Board from './components/Board'

import BoardNum from './components/BoardNum'


function App() {

  
  return (
    <div className="App">

  <NavLink to='/home'
  className="LinkText">Home</NavLink> | 

  <NavLink to="/about" className="LinkText">About</NavLink> | 
  <NavLink to="/board" className="LinkText">Board</NavLink> 

    <Routes>
      <Route path="/home" element={<Home />}></Route> 
      <Route path="/about" element={<About />}></Route> 
      
      {/*Outlet으로 출력*/}
      <Route path="/board" element={<Board />}>
    <Route path=":id" element={<BoardNum />}></Route>
      </Route> 


    </Routes>



    </div>
  );
}

export default App;
