// Used in /Components/PuzzleGeneratorPage/Components/Buttons/NavButtons/PreviewButtonRouting

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../../../../ButtonLinkTemplate';



function PreviewButtonLayout(){
    return(
        <>
            <Nav>
                <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Existing Topics"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default PreviewButtonLayout;
