import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function CreateTopicAccordionLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic Page"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default CreateTopicAccordionLayout;