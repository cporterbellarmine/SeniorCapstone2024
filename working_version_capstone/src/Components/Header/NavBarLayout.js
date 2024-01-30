// Used in /Components/Header/NavBarRouting

import React from 'react';
import { Outlet } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import NavLinkTemplate from './NavLinkTemplate';
import { StyledTopNavBar } from '../ComponentStyling';

const NavBarLayout = () => {
    return(
        <Row>
            <StyledTopNavBar>
                <Stack direction='horizontal'>
                    <NavLinkTemplate pathway="/" textDisplayed="Home"/>
                    <div className='vr'/>
                    <NavLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <div className='vr'/>
                    <NavLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <div className='vr'/>
                    <NavLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                    <div className='vr'/>
                </Stack>
            </StyledTopNavBar>
            <Outlet />
        </Row>
    );
}
export default NavBarLayout;