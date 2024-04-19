import React from 'react';
import { Route, Routes } from 'react-router-dom';
import XsViewTopicsLayout from '../Layout/XsVTButtonLayout';
import ViewTopics from '../../../../../../../Pages/ViewTopics';

function XsVTButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<XsViewTopicsLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default XsVTButtonRouting;