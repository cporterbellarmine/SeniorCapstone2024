import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewTopicsAccordionLayout from './XsViewTopicsAccordionLayout';
import ViewTopics from '../../../../../Pages/ViewTopics';

function XsViewTopicsAccordionRouting(){
    return(
        <Routes>
            <Route path='/*' element={<ViewTopicsAccordionLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default XsViewTopicsAccordionRouting;