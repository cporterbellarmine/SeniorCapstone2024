import React from 'react';
import MainHeader from './Components/Header/MainHeader';
import { BrowserRouter } from 'react-router-dom';
// import MenuContainer from './Components/HomePage/MenuContainer';
import './App.css';
import HomePage from './Pages/HomePage';

function App() {
  return (
    <div className='App-container'>
      <BrowserRouter>
        <MainHeader />
        <HomePage/>
      </BrowserRouter>
    </div>
  );
}

export default App;
