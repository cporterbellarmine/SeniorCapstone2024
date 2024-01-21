import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {  PuzzleGeneratorButtonRoute, ViewTopicsButtonRoute, CreateTopicButtonRoute } from '../Individual/Buttons/Templates/ButtonRoutes/ButtonRoutes';
import ButtonNavOrg from './ButtonNavOrg';
import Home from '../../Pages/HomePage';
import PuzzleGenerator from '../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';


function ButtonNavigation(){
    return(
        <div>
            <div>
                <h1>Menu</h1>
            </div>
            <div>
                <Routes>
                    <Route path='/' element={<ButtonNavOrg />}>
                        <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                        <Route pathName='view-topics' displayPage={<ViewTopics />} />
                        <Route pathName='create-topic' displayPage={<CreateTopic />} />
                    </Route>
                </Routes>
            </div>
        </div>
        
    );
};
export default ButtonNavigation;