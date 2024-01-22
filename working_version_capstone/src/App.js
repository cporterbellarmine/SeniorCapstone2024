import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainHeader from './Components/Header/MainHeader';
import HomePage from './Pages/HomePage';
import Row from 'react-bootstrap/Row';
import './App.css';


function App() {
  return (
    <div className='App-container'>
      <BrowserRouter>
        <Row>
          <MainHeader />
          {/* <HomePage/> */}
        </Row>
      </BrowserRouter>
    </div>
  );
}

export default App;
