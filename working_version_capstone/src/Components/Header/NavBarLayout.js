import React from 'react';
import { Outlet } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import NavigationLinkTemplate from './NavigationLinkTemplate';
import { StyledBSNavBar } from '../ComponentStyling';

const NavBarLayout = () => {
    return(
        <>
            <StyledBSNavBar>
                <Col>
                    <NavigationLinkTemplate pathway="/" textDisplayed={<h3 style={{fontWeight: "normal"}}>Home</h3>}/>
                    <NavigationLinkTemplate pathway="/puzzle-generator" textDisplayed={<h3 style={{fontWeight: "normal"}}>Puzzle Generator</h3>}/>
                    <NavigationLinkTemplate pathway="/view-topics" textDisplayed={<h3 style={{fontWeight: "normal"}}>View Topics</h3>}/>
                    <NavigationLinkTemplate pathway="/create-topic" textDisplayed={<h3 style={{fontWeight: "normal"}}>Create Topic</h3>}/>

                </Col>
            </StyledBSNavBar>
            <Outlet />
        </>
    );
}
export default NavBarLayout;