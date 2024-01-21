import React from 'react';
import { Route , Routes } from 'react-router-dom';
import NavBarLayout from './NavBarLayout';
import PuzzleGenerator from '../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';
import ErrorPage from '../../Pages/ErrorPage';


function NavBarRouting(){
    return(
        <>
            <Routes>
                <Route path='/' element={<NavBarLayout />}>
                    <Route path='puzzle-generator' element={<PuzzleGenerator />} />
                    <Route path='view-topics' element={<ViewTopics />} />
                    <Route path='create-topic' element={<CreateTopic />} />
                    <Route path='*' element={<ErrorPage />} />
                </Route>
            </Routes>
        </>
    );
}
export default NavBarRouting;