// Used in /Components/PuzzleGeneratorPage/Components/Buttons/NavButtons/PreviewButtonRouting

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import PreviewButtonLinkTemplate from '../PreviewButtonLinkTemplate';



function PreviewButtonLayout(){
    return(
        <>
            <Nav>
                <PreviewButtonLinkTemplate pathway="/view-topics" textDisplayed="View Existing Topics"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default PreviewButtonLayout;
