import React from 'react';
import { StyledButtonLink } from '../../../../ComponentStyling';

function ButtonLinkTemplate(props){
    return(
        <StyledButtonLink to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}
export default ButtonLinkTemplate;