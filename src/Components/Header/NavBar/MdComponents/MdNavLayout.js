import React from 'react';
import { Outlet } from 'react-router-dom';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import MdNavLinkTemplate from './MdNavLinkTemplate';
import { StyledLogo } from '../StyledLogo';
import { StyledTopNavBar } from '../NavBarStyle';
import WordSmaller from '../../../Images/WordSmaller.png';

const MdNavLayout = () => {
    return(
        <Row>
            <StyledTopNavBar className='d-flex border-bottom p-2'>
                <Stack className='justify-content-center' direction='horizontal'>
                    <StyledLogo to="/"><img className='w-50' src={WordSmaller}/></StyledLogo>
                    <MdNavLinkTemplate pathway="/" end textDisplayed="Home" />
                    <MdNavLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <MdNavLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <MdNavLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </Stack>
            </StyledTopNavBar>
            <Outlet />
        </Row>
    );
}
export default MdNavLayout;