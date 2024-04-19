import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import MdVTButtonLinkTemplate from '../Template/MdVTButtonLinkTemplate';

function MdVTButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <MdVTButtonLinkTemplate pathway="/view-topics" textDisplayed={<h3>Go To View Topics</h3>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default MdVTButtonLayout;