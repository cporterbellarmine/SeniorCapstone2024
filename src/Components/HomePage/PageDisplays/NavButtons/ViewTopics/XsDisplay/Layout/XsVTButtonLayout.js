import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import XsVTButtonLinkTemplate from '../Template/XsVTButtonLinkTemplate';

function MdViewTopicsNav(props){
    return(
        <>
            <Nav className='p-0'>
                <XsVTButtonLinkTemplate pathway="/view-topics" textDisplayed={<h1>Go To View Topics</h1>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default MdViewTopicsNav;