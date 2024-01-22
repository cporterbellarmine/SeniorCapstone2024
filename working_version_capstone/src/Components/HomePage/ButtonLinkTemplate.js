import React from 'react';
import { StyledButtonLink } from '../ComponentStyling';

function ButtonLinkTemplate(props){
    return(
        <StyledButtonLink className='p-4 m-4' to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}
export default ButtonLinkTemplate;