import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewTopicsButtonLayout from './ViewTopicsButtonLayout';
import ViewTopics from '../../../../../Pages/ViewTopics';

function ViewTopicsButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<ViewTopicsButtonLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default ViewTopicsButtonRouting;