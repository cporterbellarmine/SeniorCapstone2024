import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import ButtonLinkTemplate from '../Individual/Buttons/Templates/ButtonNavLinks/ButtonLinkTemplate';
//import {  PuzzleGeneratorNavLink, ViewTopicsNavLink, CreateTopicNavLink } from '../Individual/Buttons/Templates/ButtonNavLinks/ButtonLinks';
// import "./ButtonNavOrg.css"
import { StyledButtonNav } from '../ComponentStyling';

const ButtonNavOrg = () => {
    return(
        <div>
            <React.Fragment>
                <StyledButtonNav>
                    <React.Fragment>
                        <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                        <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                        <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                    </React.Fragment>
                </StyledButtonNav>
            </React.Fragment>
            <Outlet />
        </div>
    );
};
export default ButtonNavOrg;