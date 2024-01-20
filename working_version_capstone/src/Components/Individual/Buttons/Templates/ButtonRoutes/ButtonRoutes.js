import React from 'react';
import { Route } from 'react-router-dom';
import CreateTopic from '../../../../../Pages/CreateTopic';
import PuzzleGenerator from '../../../../../Pages/PuzzleGenerator';
import ViewTopics from '../../../../../Pages/ViewTopics';

export const CreateTopicButtonRoute = () => {
    return(
        <Route path='create-topic' element={<CreateTopic />} />
    );
};

export const PuzzleGeneratorButtonRoute = () => {
    return(
        <Route path='puzzle-generator' element={<PuzzleGenerator />} />
    );
};

export const ViewTopicsButtonRoute = () => {
    return(
        <Route path='view-topics' element={<ViewTopics />} />
    );
};

