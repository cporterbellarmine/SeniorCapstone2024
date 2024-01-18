import React from 'react';
import './MainMenuObject.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainMenuButtonsRouter from '../../Individual/NavButton/ButtonRouters/MainMenuButtonsRouter';

function MainMenuObject(){
    return(
        <Container>
            <Typography component='div' style={{backgroundColor: 'blue'}}>
                <div>
                    <h4>Main Menu Container</h4>
                    <div className='MainMenuObject-title'>
                        <h1>Main Menu</h1>
                    </div>
                    <MainMenuButtonsRouter/>
                </div>
            </Typography>
        </Container>
    );
}

export default MainMenuObject;