import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function EditExistingTopicButton(){
    return(
        <>
            <Nav>
                <ButtonLinkTemplate pathway="/edit-topic" textDisplayed="Edit Topics"/>
            </Nav>
        </>
    );
};
export default EditExistingTopicButton;