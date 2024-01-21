import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ButtonNavOrg from './ButtonNavOrg';
import PuzzleGenerator from '../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';


function ButtonNavigation(){
    return(
        <Routes>
            <Route path='/' element={<ButtonNavOrg />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
                <Route pathName='create-topic' displayPage={<CreateTopic />} />
            </Route>
        </Routes>
    );
};
export default ButtonNavigation;