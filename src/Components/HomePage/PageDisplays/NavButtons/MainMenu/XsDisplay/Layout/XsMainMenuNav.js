import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import MainMenuButtonLinkTemplate from '../../MainMenuButtonLinkTemplate';

const XsMainMenuNav = () => {
    return(
        <>
            <Nav>
                <Stack gap={1}>
                    <MainMenuButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <MainMenuButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <MainMenuButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </Nav>
            <Outlet />
        </>
        
    );
}

export default XsMainMenuNav;