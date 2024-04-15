import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import MdVTButtonLinkTemplate from '../ViewTopics/MdVTButtonLinkTemplate';

function MdViewTopicsNav(props){
    return(
        <>
            <Nav className='p-0'>
                <MdVTButtonLinkTemplate pathway="/view-topics" textDisplayed={<h1>Go To View Topics</h1>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default MdViewTopicsNav;