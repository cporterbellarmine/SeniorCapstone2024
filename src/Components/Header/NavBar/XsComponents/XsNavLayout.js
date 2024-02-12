import React from 'react';
import { Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import XsDropdownNavLinkItem from './XsDropdownNavLinkItem';
import { XsDropdownNavMenu } from './XsNavStyling';
import { StyledLogo } from '../StyledLogo';
import { StyledTopNavBar } from '../NavBarStyle';
import WordSmaller from '../../../Images/WordSmaller.png';
import './xs-dropdown-id.css';

const XsNavLayout = () => {
    return(
        <>
            <Row className='d-flex'>
                <StyledTopNavBar className='d-flex justify-content-between align-items-center p-2'>
                    <Col className='col-1 d-flex'>
                        <StyledLogo to="/"><img className='w-75' src={WordSmaller}/></StyledLogo>
                    </Col>
                    <Col className='col-2'>
                        <Dropdown>
                                <Dropdown.Toggle id='active-button'>
                                    Menu
                                </Dropdown.Toggle>
                                <XsDropdownNavMenu>
                                    <XsDropdownNavLinkItem pathway="/" end textDisplayed="Home" />
                                    <Dropdown.Divider className='m-0'/>
                                    <XsDropdownNavLinkItem pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                                    <Dropdown.Divider className='m-0'/>
                                    <XsDropdownNavLinkItem pathway="/view-topics" textDisplayed="View Topics"/>
                                    <Dropdown.Divider className='m-0'/>
                                    <XsDropdownNavLinkItem pathway="/create-topic" textDisplayed="Create Topic"/>
                                </XsDropdownNavMenu>
                            </Dropdown>
                    </Col>
                </StyledTopNavBar>
                <Outlet />
            </Row>
        </>
        
    );
}
export default XsNavLayout;