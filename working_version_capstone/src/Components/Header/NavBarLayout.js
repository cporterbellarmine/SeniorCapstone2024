import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import NavigationLinkTemplate from './NavigationLinkTemplate';
import { StyledBSNavBar } from '../ComponentStyling';

const NavBarLayout = () => {
    return(
        <div>
            <StyledBSNavBar>
                <>
                    <NavigationLinkTemplate pathway="/" textDisplayed={<h3 style={{fontWeight: "normal"}}>Home</h3>}/>
                        <NavigationLinkTemplate pathway="/puzzle-generator" textDisplayed={<h3 style={{fontWeight: "normal"}}>Puzzle Generator</h3>}/>
                        <NavigationLinkTemplate pathway="/view-topics" textDisplayed={<h3 style={{fontWeight: "normal"}}>View Topics</h3>}/>
                        <NavigationLinkTemplate pathway="/create-topic" textDisplayed={<h3 style={{fontWeight: "normal"}}>Create Topic</h3>}/>
                </>
            </StyledBSNavBar>
            <Outlet />
        </div>
    );
}
export default NavBarLayout;