import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import MainMenuButtons from '../PageComponents/HomePageMainMenu/MainMenuButtons';

function MainMenuButtonsRouter(){
    return(
        <div>
            <Router>
                <MainMenuButtons/>
            </Router>
        </div>
    );
}
export default MainMenuButtonsRouter;