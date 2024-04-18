import React from 'react';
import { StyledXSPGButtonLink } from '../../../XsButtonStyling';

function MdPGButtonLinkTemplate(props){
    return(
        <StyledXSPGButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledXSPGButtonLink>
    );
}
export default MdPGButtonLinkTemplate;