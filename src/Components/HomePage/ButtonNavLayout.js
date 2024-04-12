// Used in /Components/HomePage/ButtonNavRouting

import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Stack from 'react-bootstrap/Stack';
import ButtonLinkTemplate from '../ButtonLinkTemplate';


const ButtonNavLayout = () => {
    return(
        <>
            <Nav>
                <Stack gap={1}>
                    <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </Nav>
            <Outlet />
        </>
        
    );
};
export default ButtonNavLayout;