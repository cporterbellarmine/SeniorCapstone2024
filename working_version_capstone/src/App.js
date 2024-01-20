import React from 'react';
import MainHeader from './Components/Header/MainHeader';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='App-container'>
      <BrowserRouter>
        <MainHeader />
      </BrowserRouter>
    </div>
  );
}

export default App;
