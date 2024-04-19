import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MdViewTopicsLayout from '../Layout/MdVTButtonLayout';
import ViewTopics from '../../../../../../../Pages/ViewTopics';

function MdVTButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<MdViewTopicsLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default MdVTButtonRouting;