// Used in /src/index


import React from 'react';
import Container from 'react-bootstrap/Container';
import { BrowserRouter } from 'react-router-dom';
import MainHeader from './Components/Header/MainHeader';

  function App() {
  return (
    
    <>
      <BrowserRouter>
          <MainHeader />
      </BrowserRouter>
    </>
  );
}

export default App;
