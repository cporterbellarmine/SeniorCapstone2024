import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateTopicButtonLayout from './CreateTopicButtonLayout';
import CreateTopic from '../../../../../Pages/CreateTopic';

function CreateTopicButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<CreateTopicButtonLayout />}>
                <Route pathName='create-topic' displayPage={<CreateTopic />} />
            </Route>
        </Routes>
    );
};
export default CreateTopicButtonRouting;