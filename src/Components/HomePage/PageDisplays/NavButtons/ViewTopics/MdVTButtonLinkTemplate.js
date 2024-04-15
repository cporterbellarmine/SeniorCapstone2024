import React from 'react';
import { StyledVTButtonLink } from '../MainMenu/MdButtonStyling';

function MdVTButtonLinkTemplate(props){
    return(
        <StyledVTButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledVTButtonLink>
    );
}
export default MdVTButtonLinkTemplate;