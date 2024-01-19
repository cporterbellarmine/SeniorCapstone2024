import React from 'react';
import './MainMenuObject.css'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import MainMenuButtonsRouter from '../../Individual/NavButton/ButtonRouters/MainMenuButtonsRouter';
import PhotoContainer from '../../Individual/NavButton/PageComponents/HomePageMainMenu/PhotoContainer';

function MainMenuObject(){
    return(
        <div>
            <div>
                <h4>Main Menu Container</h4>
            </div>
            <h1 className='MainMenuObject-title'>Main Menu</h1>
            <Container style={{display:'flex', justifyContent:'space-between', alignItems:'stretch'}}>
                
                <div className='MainMenuObject-colDiv'>
                    <Typography component='div' style={{backgroundColor: 'blue', padding:'1em'}}>
                        <MainMenuButtonsRouter/>
                    </Typography>
                </div> 
                <Container className='MainMenuObject-colDiv'>
                    <Typography component='div' style={{backgroundColor: 'darkred', padding:'1em'}}>
                        <PhotoContainer />
                    </Typography>
                </Container>
            </Container>
        </div>

    );
}

export default MainMenuObject;