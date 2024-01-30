// Used in Components/HomePage/MenuContainer

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import PuzzleGenerator from '../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';
import ButtonNavLayout from './ButtonNavLayout';


function ButtonNavigation(){
    return(
        <Col>
            <Routes>
                <Route path='/*' element={<ButtonNavLayout />}>
                    <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                    <Route pathName='view-topics' displayPage={<ViewTopics />} />
                    <Route pathName='create-topic' displayPage={<CreateTopic />} />
                </Route>
            </Routes>
        </Col>
        
    );
};
export default ButtonNavigation;