import React from 'react';
import { StyledButtonLink } from './NavButtons/ButtonStyling';

function ButtonLinkTemplate(props){
    return(
        <StyledButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}
export default ButtonLinkTemplate;