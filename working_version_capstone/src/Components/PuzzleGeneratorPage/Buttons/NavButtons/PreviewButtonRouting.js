// Used in /Components/PuzzleGenerator/Buttons/NavButtons/
// Used in /Components/PuzzleGenerator/Containers/Components/Options/PreviewNavButton
// Used in /Components/PuzzleGenerator/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGenerator/PageDisplays/XsGeneratorPage

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PreviewButtonLayout from './PreviewButtonLayout';
import ViewTopics from '../../../../Pages/ViewTopics';

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