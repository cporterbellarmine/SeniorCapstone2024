import React from 'react';
import { Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import XsNavLinkTemplate from './XsNavLinkTemplate';
import { XsDropdownNavMenu } from './XsNavStyling';
import { StyledTopNavBar, StyledLogo, ActiveNav } from '../../../ComponentStyling';
import WordSmaller from '../../../Images/WordSmaller.png';
import '../../active-page.css';

const XsNavLayout = () => {
    return(
        <Row className='d-flex'>
            <StyledTopNavBar className='d-flex justify-content-between align-items-center p-2'>
                <Col className='col-1 offset-1 d-flex'>
                    <StyledLogo to="/"><img className='w-75' src={WordSmaller}/></StyledLogo>
                </Col>
                <Col className='col-2'>
                    <Dropdown>
                            <Dropdown.Toggle id='dropdown-basic'>
                                Menu
                            </Dropdown.Toggle>
                            <XsDropdownNavMenu>
                                <Dropdown.Item>
                                    <XsNavLinkTemplate pathway="/" end textDisplayed="Home" />
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <XsNavLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <XsNavLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <XsNavLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                                </Dropdown.Item>
                            </XsDropdownNavMenu>
                        </Dropdown>
                </Col>
            </StyledTopNavBar>
            <Outlet />
        </Row>
    );
}
export default XsNavLayout;