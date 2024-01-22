import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ButtonNavOrg from './ButtonNavOrg';
import HomePage from '../../Pages/HomePage';
import PuzzleGenerator from '../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';


function ButtonNavigation(){
    return(
        <Container>
            <Routes>
                <Route path='/' element={<ButtonNavOrg />}>
                    <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                    <Route pathName='view-topics' displayPage={<ViewTopics />} />
                    <Route pathName='create-topic' displayPage={<CreateTopic />} />
                </Route>
            </Routes>
        </Container>
        
    );
};
export default ButtonNavigation;