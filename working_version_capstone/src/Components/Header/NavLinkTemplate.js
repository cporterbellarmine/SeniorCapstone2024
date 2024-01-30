// Used in /Components/Header/NavBarLayout

import React from 'react';
import { StyledNavLink } from '../ComponentStyling';

function NavigationLinkTemplate(props){
    return(
        <StyledNavLink className='text-center p-2' to={props.pathway}>{props.textDisplayed}</StyledNavLink>
    );
}
export default NavigationLinkTemplate;