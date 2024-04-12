import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTopicAccordionLayout from './CreateTopicAccordionLayout';
import CreateTopic from '../../../../../Pages/CreateTopic';

function CreateTopicAccordionRouting(){
    return(
        <Routes>
            <Route path='/*' element={<CreateTopicAccordionLayout />}>
                <Route pathName='create-topic' displayPage={<CreateTopic />} />
            </Route>
        </Routes>
    );
};
export default CreateTopicAccordionRouting;