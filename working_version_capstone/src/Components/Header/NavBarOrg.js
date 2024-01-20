import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationLinkTemplate from './NavigationLinkTemplate';
import { StyledMenuBarNav } from '../ComponentStyling';

const NavBarOrg = () => {
    return(
        <React.Fragment>
            <StyledMenuBarNav>
                <React.Fragment>
                    <NavigationLinkTemplate pathway="/" textDisplayed="Home"/>
                        <NavigationLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                        <NavigationLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                        <NavigationLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </React.Fragment>
            </StyledMenuBarNav>
            <Outlet />
        </React.Fragment>
    );
}
export default NavBarOrg;