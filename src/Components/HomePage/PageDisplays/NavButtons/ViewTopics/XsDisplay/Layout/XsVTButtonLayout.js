import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import XsVTButtonLinkTemplate from '../Template/XsVTButtonLinkTemplate';

function XsVTButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <XsVTButtonLinkTemplate pathway="/view-topics" textDisplayed={<h6>Go To View Topics</h6>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default XsVTButtonLayout;