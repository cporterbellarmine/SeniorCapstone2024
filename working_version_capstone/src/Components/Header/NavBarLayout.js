// Used in /Components/Header/NavBarRouting

import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import NavLinkTemplate from './NavLinkTemplate';
import { StyledTopNavBar, StyledLogo } from '../ComponentStyling';
import WordSmaller from '../Images/WordSmaller.png'

const NavBarLayout = () => {
    return(
        <Row>
            <StyledTopNavBar className='d-flex'>
                <Stack className='justify-content-center' direction='horizontal'>
                    <StyledLogo className='p-2' to="/"><img className='w-50' src={WordSmaller}/></StyledLogo>
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