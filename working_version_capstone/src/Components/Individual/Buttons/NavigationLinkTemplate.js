import React from 'react';
import { StyledLink } from '../../ComponentStyling';

function NavigationLink(props){
    return(
        <StyledLink to={props.pathway}>{props.textDisplayed}</StyledLink>
    );
}
export default NavigationLink;