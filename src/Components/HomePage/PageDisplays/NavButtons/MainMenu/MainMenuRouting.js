import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import PuzzleGenerator from '../../../../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../../../../Pages/ViewTopics';
import CreateTopic from '../../../../../Pages/CreateTopic';
import EditTopic from '../../../../../Pages/EditTopic';
import MainMenuNav from './MainMenuNav';


function MainMenuRouting(){
    return(
        <Col>
            <Routes>
                <Route path='/*' element={<MainMenuNav />}>
                    <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                    <Route pathName='view-topics' displayPage={<ViewTopics />} />
                    <Route pathName='create-topic' displayPage={<CreateTopic />} />
                    <Route pathName='edit-topic' displayPage={<EditTopic />} />
                </Route>
            </Routes>
        </Col>
        
    );
};
export default MainMenuRouting;