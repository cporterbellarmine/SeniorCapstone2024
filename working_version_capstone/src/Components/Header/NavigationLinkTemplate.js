import React from 'react';
import { StyledMenuBarLink } from '../ComponentStyling';

function NavigationLinkTemplate(props){
    return(
        <StyledMenuBarLink to={props.pathway}>{props.textDisplayed}</StyledMenuBarLink>
    );
}
export default NavigationLinkTemplate;