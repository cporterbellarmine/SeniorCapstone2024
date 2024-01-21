import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import ButtonLinkTemplate from '../Individual/Buttons/Templates/ButtonNavLinks/ButtonLinkTemplate';
//import {  PuzzleGeneratorNavLink, ViewTopicsNavLink, CreateTopicNavLink } from '../Individual/Buttons/Templates/ButtonNavLinks/ButtonLinks';
import { StyledButtonNav } from '../ComponentStyling';

const ButtonNavOrg = () => {
    return(
        <>
            <Nav>
                    <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
            </Nav>
            <Outlet />
        </>
    );
};
export default ButtonNavOrg;