import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import MdButtonLinkTemplate from '../Template/MdPGButtonLinkTemplate';

function MdPuzzleGeneratorButtonLayout(props){
    return(
        <>
            <Nav className='p-0'>
                <MdButtonLinkTemplate pathway="/puzzle-generator" textDisplayed={<h1>Go To Puzzle Generator</h1>}/>
            </Nav>
            <Outlet />
        </>
    );
};

export default MdPuzzleGeneratorButtonLayout;