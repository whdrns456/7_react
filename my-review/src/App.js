import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import { useState } from 'react';
import Memo from './components/Memo';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import CountLetters from './components/CountLetters.jsx';


function App() {
  return (
  <BrowserRouter>
<div className="App">
      <header className="App-header">
        <Home/>
      <nav style={{backgroundColor: "tomato"}}>
        <Link to="/">HOME</Link>
        <Link to="/timer">타이머</Link>
        <Link to="/countLetters">글자 수 세기</Link>
      </nav>
    <CountLetters/>
        </header>
        <Routes>
          <Route path="/" element={<p>메인</p>}/>
          <Route path="/timer" element={<Home/>}/>
          <Route path="/countLetters" element={<CountLetters/>}/>


        </Routes>
    </div>
</BrowserRouter>
  );
}

export default App;
