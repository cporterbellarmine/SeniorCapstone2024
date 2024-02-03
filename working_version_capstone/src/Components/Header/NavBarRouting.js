// Used in /Components/Header/MainHeader

import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from '../../Pages/HomePage';
import PuzzleGenerator from '../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';
import ErrorPage from '../../Pages/ErrorPage';
import NavBarLayout from './NavBarLayout';

function NavBarRouting(){
    return(
        <Container>
            <Routes>
                <Route path='/*' element={<NavBarLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='puzzle-generator' element={<PuzzleGenerator />} />
                    <Route path='view-topics' element={<ViewTopics />} />
                    <Route path='create-topic' element={<CreateTopic />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </Container>
    );
}
export default NavBarRouting;