import React from 'react';
import { StyledNavLink } from '../ComponentStyling';

function NavigationLinkTemplate(props){
    return(
        <StyledNavLink className='text-center text-nowrap p-3' to={props.pathway}>{props.textDisplayed}</StyledNavLink>
    );
}
export default NavigationLinkTemplate;