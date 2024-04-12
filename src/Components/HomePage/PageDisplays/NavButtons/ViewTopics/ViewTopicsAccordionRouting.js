import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ViewTopicsAccordionLayout from './ViewTopicsAccordionLayout';
import ViewTopics from '../../../../../Pages/ViewTopics';

function ViewTopicsAccordionRouting(){
    return(
        <Routes>
            <Route path='/*' element={<ViewTopicsAccordionLayout />}>
                <Route pathName='view-topics' displayPage={<ViewTopics />} />
            </Route>
        </Routes>
    );
};
export default ViewTopicsAccordionRouting;