import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import PuzzleGenerator from '../../../../Pages/PuzzleGeneratorPage';
import CreateTopic from '../../../../Pages/CreateTopic';
import EditTopic from '../../../../Pages/EditTopic';
import NavButtonsLayout from './NavButtonsLayout';

const NavButtonRouting = () => {
    return(
        <Routes>
            <Route path='/*' element={<NavButtonsLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                <Route pathName='create-topic' displayPage={<CreateTopic />} />
                <Route pathName='edit-topic' displayPage={<EditTopic />} />
            </Route>
        </Routes>
    );
};
export default NavButtonRouting;