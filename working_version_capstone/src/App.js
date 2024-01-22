import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MainHeader from './Components/Header/MainHeader';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import HomePage from './Pages/HomePage';
import Row from 'react-bootstrap/Row';


function App() {
  return (
    <>
      <BrowserRouter>
          <MainHeader />
          {/* <HomePage/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
