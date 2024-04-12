import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function CreateTopicButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default CreateTopicButtonLayout;

