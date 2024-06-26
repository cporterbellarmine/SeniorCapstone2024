import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function ViewTopicsButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default ViewTopicsButtonLayout;
