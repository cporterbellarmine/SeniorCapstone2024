import React from 'react';
import { StyledXSVTButtonLink } from '../PuzzleGenerator/XsButtonStyling';

function MdVTButtonLinkTemplate(props){
    return(
        <StyledXSVTButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledXSVTButtonLink>
    );
}
export default MdVTButtonLinkTemplate;