import React from 'react';
import Nav from 'react-bootstrap/Nav';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function CreateTopicButton(){
    return(
        <>
            <Nav>
                <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create a Topic"/>
            </Nav>
        </>
    );
};
export default CreateTopicButton;