import React from 'react';
import { Outlet } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import NavigationLinkTemplate from './NavigationLinkTemplate';
import { StyledBSNavBar } from '../ComponentStyling';

const NavBarLayout = () => {
    return(
        <>
            <StyledBSNavBar>
                <Stack direction='horizontal'>
                    <NavigationLinkTemplate pathway="/" textDisplayed="Home"/>
                    <NavigationLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <NavigationLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <NavigationLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </StyledBSNavBar>
            <Outlet />
        </>
    );
}
export default NavBarLayout;