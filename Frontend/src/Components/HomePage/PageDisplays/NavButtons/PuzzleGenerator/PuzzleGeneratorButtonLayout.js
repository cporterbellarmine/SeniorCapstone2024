import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../ButtonLinkTemplate';

function PuzzleGeneratorButtonLayout(){
    return(
        <>
            <Nav className='p-0'>
                <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
            </Nav>
            <Outlet />
        </>
    );
};

export default PuzzleGeneratorButtonLayout;
