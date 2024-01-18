import './MainMenuButtons.css';
import React from 'react';
import NavButtonCreateTopic from '../../UsableButtons/IndividualButtons/NavButtonCreateTopic';
import NavButtonPuzzleGenerator from '../../UsableButtons/IndividualButtons/NavButtonPuzzleGenerator';
import NavButtonViewTopics from '../../UsableButtons/IndividualButtons/NavButtonViewTopics';
import {Nav, Bars} from '../../../NavBar/navBarElements';

function MainMenuButtons(){
    return(
        <div className='MainMenuButtons-buttons'>
                <NavButtonPuzzleGenerator />
                <NavButtonViewTopics />
                <NavButtonCreateTopic />
        </div>
        
    );
}
export default MainMenuButtons;