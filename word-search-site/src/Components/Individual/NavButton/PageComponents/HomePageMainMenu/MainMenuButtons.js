import './MainMenuButtons.css';
import React from 'react';
import NavButtonCreateTopic from '../../UsableButtons/IndividualButtons/NavButtonCreateTopic';
import NavButtonPuzzleGenerator from '../../UsableButtons/IndividualButtons/NavButtonPuzzleGenerator';
import NavButtonViewTopics from '../../UsableButtons/IndividualButtons/NavButtonViewTopics';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import {Nav, Bars} from '../../../NavBar/navBarElements';

function MainMenuButtons(){
    return(
        <Container>
            <Typography component='div' style={{backgroundColor: 'darkred', padding:'1em'}}>
                <div className='MainMenuButtons-buttons'>
                    <NavButtonPuzzleGenerator />
                    <NavButtonViewTopics />
                    <NavButtonCreateTopic />
                </div>
            </Typography>
            
        </Container>
        
        
    );
}
export default MainMenuButtons;