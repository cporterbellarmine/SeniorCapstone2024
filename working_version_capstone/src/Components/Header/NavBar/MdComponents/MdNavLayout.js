import React from 'react';
import { Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import NavLinkTemplate from '../../NavLinkTemplate';
import { StyledTopNavBar, StyledLogo, ActiveNav } from '../../../ComponentStyling';
import WordSmaller from '../Images/WordSmaller.png';

const NavBarLayout = () => {
    return(
        <Row>
            <StyledTopNavBar className='d-flex border-bottom'>
                <Stack className='justify-content-center' direction='horizontal'>
                    <StyledLogo to="/"><img className='w-50' src={WordSmaller}/></StyledLogo>
                    <NavLinkTemplate pathway="/" end textDisplayed="Home" />
                    <NavLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <NavLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <NavLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </StyledTopNavBar>
            <Outlet />
        </Row>
    );
}
export default NavBarLayout;