import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import {  Route,Routes,useLocation,useNavigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login'

function App() {
  return (
    <div className="App">
          <BrowserRouter>
              <Routes>
                <Route exact path="/generate"  element={<Home />}/>
                <Route exact path="/"  element={<Login />}/>
              </Routes>
          </BrowserRouter>
      </div>
  );
}

export default App;
