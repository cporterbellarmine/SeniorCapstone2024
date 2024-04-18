import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import PuzzleGenerator from '../../../../../../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../../../../../../Pages/ViewTopics';
import MdMainMenuNav from '../Layout/MdMainMenuNav';


function MdMainMenuRouting(){
    return(
        <Col>
            <Routes>
                <Route path='/*' element={<MdMainMenuNav />}>
                    <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                    <Route pathName='view-topics' displayPage={<ViewTopics />} />
                </Route>
            </Routes>
        </Col>
    );
};
export default MdMainMenuRouting;