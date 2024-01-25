import React from 'react';
import { Outlet } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import NavLinkTemplate from './NavLinkTemplate';
import { StyledBSNavBar } from '../ComponentStyling';

const NavBarLayout = () => {
    return(
        <Row>
            <StyledBSNavBar expand="sm">
                <Stack direction='horizontal' style={{display: 'flex'}}>
                    <NavLinkTemplate pathway="/" textDisplayed="Home"/>
                    <NavLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <NavLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <NavLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </StyledBSNavBar>
            <Outlet />
        </Row>
    );
}
export default NavBarLayout;