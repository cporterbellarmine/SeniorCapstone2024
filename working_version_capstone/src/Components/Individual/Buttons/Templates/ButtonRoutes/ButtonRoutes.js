import React from 'react';
import { Route } from 'react-router-dom';
import PuzzleGenerator from '../../../../../Pages/PuzzleGeneratorPage';
import ViewTopics from '../../../../../Pages/ViewTopics';
import CreateTopic from '../../../../../Pages/CreateTopic';

export const PuzzleGeneratorButtonRoute = () => {
    return(
        <Route pathName='puzzle-generator' renderPage={<PuzzleGenerator />} />
    );
};

export const ViewTopicsButtonRoute = () => {
    return(
        <Route pathName='view-topics' renderPage={<ViewTopics />} />
    );
};

export const CreateTopicButtonRoute = () => {
    return(
        <Route pathName='create-topic' renderPage={<CreateTopic />} />
    );
};