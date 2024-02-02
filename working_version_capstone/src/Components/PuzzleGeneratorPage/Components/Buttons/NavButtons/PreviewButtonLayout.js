// Used in /Components/PuzzleGeneratorPage/Components/Buttons/NavButtons/PreviewButtonRouting

import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ButtonLinkTemplate from '../../../../ButtonLinkTemplate';



function PreviewButtonLayout(){
    return(
        <>
            <Nav>
                <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Existing Topics"/>
            </Nav>
        </>
    );
};

export default PreviewButtonLayout;
