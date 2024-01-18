import React from 'react';
import './Home.css';
import MainMenuObject from '../Components/Containers/MainMenu/MainMenuObject';
import OverallPageHeader from '../Components/Containers/Headers/MainPage/OverallPageHeader';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function MainPage(){
    return (
    <Container>
        <Typography component='div' style={{backgroundColor: 'aqua'}}>
            <h4>Home Screen Container</h4>
            <OverallPageHeader />
            <MainMenuObject />
        </Typography>
    </Container>);
}
export default MainPage;