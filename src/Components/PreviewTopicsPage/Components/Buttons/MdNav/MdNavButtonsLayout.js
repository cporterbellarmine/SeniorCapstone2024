// Used in Components/Buttons/MdNav/MdNavButtonRouting

import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import PreviewTopicsButtonLinkTemplate from '../../../Styling/PreviewTopicsButtonLinkTemplate';

function MdNavButtonsLayout(){
    return(
        <>
            <Nav>
                <Stack direction="horizontal" gap={5} className='mx-auto'>
                    <PreviewTopicsButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    {/* <PreviewTopicsButtonLinkTemplate pathway="/create-topic" textDisplayed="Create a Topic"/>
                    <PreviewTopicsButtonLinkTemplate pathway="/edit-topic" textDisplayed="Edit Topics"/> */}
                </Stack>
            </Nav>
            <Outlet />
        </>
    );
};
export default MdNavButtonsLayout;