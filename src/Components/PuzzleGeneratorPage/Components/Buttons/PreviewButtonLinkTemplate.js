import React from 'react';
import { StyledButtonLink } from './PreviewButtonLinkStyling';

function ButtonLinkTemplate(props){
    return(
        <StyledButtonLink className='p-1 p-md-2 p-lg-3 m-3' to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}
export default ButtonLinkTemplate;