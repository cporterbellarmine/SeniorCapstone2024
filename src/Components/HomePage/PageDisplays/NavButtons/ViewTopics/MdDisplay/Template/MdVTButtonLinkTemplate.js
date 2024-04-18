import React from 'react';
import { StyledMDVTButtonLink } from '../../../MdButtonStyling';

function MdVTButtonLinkTemplate(props){
    return(
        <StyledMDVTButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledMDVTButtonLink>
    );
}
export default MdVTButtonLinkTemplate;