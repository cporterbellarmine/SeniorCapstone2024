import React from 'react';
import { StyledButtonLink } from '../ComponentStyling';

function ButtonLinkTemplate(props){
    return(
        <StyledButtonLink className='p-2 m-3' to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}
export default ButtonLinkTemplate;