import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationLinkTemplate from '../Individual/Buttons/NavigationLinkTemplate';
import { StyledNav } from '../ComponentStyling';

const NavBarOrg = () => {
    return(
        <React.Fragment>
            <StyledNav>
                <React.Fragment>
                    <NavigationLinkTemplate pathway="/" textDisplayed="Home"/>
                        <NavigationLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                        <NavigationLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                        <NavigationLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </React.Fragment>
            </StyledNav>
            <Outlet />
        </React.Fragment>
    );
}
export default NavBarOrg;