import React from 'react';
import './MainMenuObject.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainMenuButtonsRouter from '../../Individual/NavButton/ButtonRouters/MainMenuButtonsRouter';

function MainMenuObject(){
    return(
        <Container className='MainMenuObject-container'>
            <h4>Main Menu Container</h4>
            <Typography component='div' style={{backgroundColor: 'blue', paddingBottom:'1em'}}>
                <h1>Main Menu</h1>
                <MainMenuButtonsRouter/>
            </Typography>
        </Container>
    );
}

export default MainMenuObject;