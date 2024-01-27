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