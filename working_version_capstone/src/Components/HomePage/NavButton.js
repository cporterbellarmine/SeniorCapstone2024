import React from 'react';
import { Route , Routes } from 'react-router-dom';
import NavBarOrg from './NavBarOrg';
import Home from '../../Pages/Home';
import PuzzleGenerator from '../../Pages/PuzzleGenerator';
import ViewTopics from '../../Pages/ViewTopics';
import CreateTopic from '../../Pages/CreateTopic';
import ErrorPage from '../../Pages/ErrorPage';


function NavigationBar(){
    return(
        <Routes>
            <Route path='/' element={<NavBarOrg />}>
                <Route index element={<Home />} />
                <Route path='puzzle-generator' element={<PuzzleGenerator />} />
                <Route path='view-topics' element={<ViewTopics />} />
                <Route path='create-topic' element={<CreateTopic />} />
                <Route path='*' element={<ErrorPage />} />
            </Route>
        </Routes>
    );
}
export default NavigationBar;