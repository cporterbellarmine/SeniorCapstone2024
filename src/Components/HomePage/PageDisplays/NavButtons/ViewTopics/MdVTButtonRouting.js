import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MdViewTopicsLayout from './MdVTButtonLayout';
import ViewTopics from '../../../../../Pages/ViewTopics';

function MdPuzzleGeneratorButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<MdViewTopicsLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default MdPuzzleGeneratorButtonRouting;