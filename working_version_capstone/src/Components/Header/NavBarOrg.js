import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import NavigationLinkTemplate from './NavigationLinkTemplate';
import { StyledMenuBarNav } from '../ComponentStyling';

const NavBarOrg = () => {
    return(
        <React.Fragment>
            <StyledMenuBarNav>
                <React.Fragment>
                    <NavigationLinkTemplate pathway="/" textDisplayed={<h3 style={{fontWeight: "normal"}}>Home</h3>}/>
                        <NavigationLinkTemplate pathway="/puzzle-generator" textDisplayed={<h3 style={{fontWeight: "normal"}}>Puzzle Generator</h3>}/>
                        <NavigationLinkTemplate pathway="/view-topics" textDisplayed={<h3 style={{fontWeight: "normal"}}>View Topics</h3>}/>
                        <NavigationLinkTemplate pathway="/create-topic" textDisplayed={<h3 style={{fontWeight: "normal"}}>Create Topic</h3>}/>
                </React.Fragment>
            </StyledMenuBarNav>
            <Outlet />
        </React.Fragment>
    );
}
export default NavBarOrg;