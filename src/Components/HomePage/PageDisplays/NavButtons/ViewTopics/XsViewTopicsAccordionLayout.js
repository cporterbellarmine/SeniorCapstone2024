import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../../ButtonLinkTemplate';

function XsViewTopicsAccordionLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics Page"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default XsViewTopicsAccordionLayout;