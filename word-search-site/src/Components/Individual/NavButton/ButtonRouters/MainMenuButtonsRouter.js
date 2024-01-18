import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainMenuButtons from '../PageComponents/HomePageMainMenu/MainMenuButtons';

function MainMenuButtonsRouter(){
    return(
        <Router>
            <MainMenuButtons/>
        </Router>
    );
}
export default MainMenuButtonsRouter;