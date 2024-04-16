import React from 'react';
import { Route , Routes } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import HomePage from '../../../../Pages/HomePage';
import PuzzleGenerator from '../../../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../../../Pages/ViewTopics';
import CreateTopic from '../../../../Pages/CreateTopic';
import ErrorPage from '../../../../Pages/ErrorPage';
import MdNavLayout from './MdNavLayout';
import { HideMdNavBarContainer } from './MdNavStlying';

function NavBarRouting(){
    return(
        <HideMdNavBarContainer>
            <Routes>
                <Route path='/*' element={<MdNavLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='puzzle-generator' element={<PuzzleGenerator />} />
                    <Route path='view-topics' element={<ViewTopics />} />
                    {/* <Route path='create-topic' element={<CreateTopic />} /> */}
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </HideMdNavBarContainer>
    );
}
export default NavBarRouting;