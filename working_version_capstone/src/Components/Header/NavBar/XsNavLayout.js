import React from 'react';
import { Outlet } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Row from 'react-bootstrap/Row';
import NavLinkTemplate from '../NavLinkTemplate';
import { StyledTopNavBar, StyledLogo, ActiveNav } from '../../ComponentStyling';
import WordSmaller from '../../Images/WordSmaller.png';
import '../active-page.css';

const XsNavLayout = () => {
    return(
        <Row>
            <StyledTopNavBar className='d-flex border-bottom'>
                    <StyledLogo to="/"><img className='w-50' src={WordSmaller}/></StyledLogo>
                    <Dropdown>
                        <Dropdown.Toggle id='dropdown-basic'>
                            Menu
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <NavLinkTemplate pathway="/" end textDisplayed="Home" />
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <NavLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                
            </StyledTopNavBar>
            <Outlet />
        </Row>
    );
}
export default XsNavLayout;