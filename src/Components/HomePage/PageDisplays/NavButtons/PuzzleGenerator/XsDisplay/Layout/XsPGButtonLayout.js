import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import XsPGButtonLinkTemplate from '../Template/XsPGButtonLinkTemplate';

function XsPGButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <XsPGButtonLinkTemplate pathway="/puzzle-generator" textDisplayed={<h6>Go To Puzzle Generator</h6>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default XsPGButtonLayout;