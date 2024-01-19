import './App.css';
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Home from './Pages/Home';
import OverallPageHeader from './Components/Containers/Headers/MainPage/OverallPageHeader';

function App() {
  return (
    <Container>
      <h4>AppContainer</h4>
      <Typography component="div" style={{backgroundColor: 'aliceblue', padding:'1em', height: '100%', width: '100%'}}>
          <OverallPageHeader />
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
