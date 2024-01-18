import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Home from './Pages/Home';

function App() {
  return (
    <Container>
      <Typography component="div" style={{backgroundColor: 'aliceblue', height: '100vh'}}>
          <h4>Main Container</h4>
          <Home />
          <a
            className="App-link"
            href="https://react.dev/learn/describing-the-ui"
            target="_blank"
            rel="noopener noreferrer"
          >
            Interface Information
          </a>
      </Typography>
    </Container>
  );
}

export default App;
