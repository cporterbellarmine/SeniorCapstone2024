import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import MdButtonLinkTemplate from '../Template/MdPGButtonLinkTemplate';

function MdPGButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <MdButtonLinkTemplate pathway="/puzzle-generator" textDisplayed={<h3>Go To Puzzle Generator</h3>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default MdPGButtonLayout;