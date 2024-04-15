import React from 'react';
import { StyledPGButtonLink } from '../MainMenu/MdButtonStyling';

function MdPGButtonLinkTemplate(props){
    return(
        <StyledPGButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledPGButtonLink>
    );
}
export default MdPGButtonLinkTemplate;