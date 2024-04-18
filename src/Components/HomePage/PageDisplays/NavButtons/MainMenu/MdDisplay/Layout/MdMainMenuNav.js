import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import MainMenuButtonLinkTemplate from '../../MainMenuButtonLinkTemplate';

const MdMainMenuNav = () => {
    return(
        <>
            <Nav>
                <Stack gap={1} direction="horizontal">
                    <MainMenuButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <MainMenuButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                </Stack>
            </Nav>
            <Outlet />
        </>
        
    );
}

export default MdMainMenuNav;