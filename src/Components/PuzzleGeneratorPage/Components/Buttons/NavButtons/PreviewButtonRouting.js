// Used in /Components/PuzzleGeneratorPage/Containers/Components/Options/PreviewNavButton
// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PreviewButtonLayout from './PreviewButtonLayout';
import ViewTopics from '../../../../../Pages/ViewTopics';

function PreviewButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<PreviewButtonLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default PreviewButtonRouting;