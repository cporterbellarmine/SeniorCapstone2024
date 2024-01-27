import React from 'react';
import ButtonLinkTemplate from '../../../ButtonLinkTemplate';
import Nav from 'react-bootstrap/Nav';


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
