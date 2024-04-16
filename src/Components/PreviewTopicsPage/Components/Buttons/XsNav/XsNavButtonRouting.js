// Used in /Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer

import React from 'react';
import {Routes, Route} from 'react-router-dom';
import PuzzleGenerator from '../../../../../Pages/PuzzleGeneratorPage';
import CreateTopic from '../../../../../Pages/CreateTopic';
import EditTopic from '../../../../../Pages/EditTopic';
import XsNavButtonsLayout from './XsNavButtonsLayout';

const XsNavButtonRouting = () => {
    return(
        <Routes>
            <Route path='/*' element={<XsNavButtonsLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
                {/* <Route pathName='create-topic' displayPage={<CreateTopic />} />
                <Route pathName='edit-topic' displayPage={<EditTopic />} /> */}
            </Route>
        </Routes>
    );
};
export default XsNavButtonRouting;