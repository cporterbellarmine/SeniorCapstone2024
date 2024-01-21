import React from 'react';
import { StyledNavLink } from '../ComponentStyling';

function NavigationLinkTemplate(props){
    return(
        <StyledNavLink to={props.pathway}>{props.textDisplayed}</StyledNavLink>
    );
}
export default NavigationLinkTemplate;