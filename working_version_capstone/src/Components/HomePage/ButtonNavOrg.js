import React, { Fragment } from 'react';
import ButtonLinkTemplate from '../Individual/Buttons/Templates/ButtonNavLinks/ButtonLinkTemplate';
import { StyledButtonNav } from '../ComponentStyling';

const ButtonNavOrg = () => {
    return(
        <React.Fragment>
            <StyledButtonNav>
                <React.Fragment>
                    <ButtonLinkTemplate pathway="/puzzle-generator" textDisplayed="Puzzle Generator"/>
                    <ButtonLinkTemplate pathway="/view-topics" textDisplayed="View Topics"/>
                    <ButtonLinkTemplate pathway="/create-topic" textDisplayed="Create Topic"/>
                </React.Fragment>
            </StyledButtonNav>
            <Outlet />
        </React.Fragment>
    );
};
export default ButtonNavOrg;