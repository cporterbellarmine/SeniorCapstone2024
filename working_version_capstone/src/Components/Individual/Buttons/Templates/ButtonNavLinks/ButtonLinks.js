import React from 'react';
import ButtonLinkTemplate from './ButtonLinkTemplate';

export const CreateTopicNavLink = () => {
    return(
        <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
    );
};

export const PuzzleGeneratorNavLink = () => {
    return(
        <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
    );
};

export const ViewTopicsNavLink = () => {
    return(
        <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
    );
};