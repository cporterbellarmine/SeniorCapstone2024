import React from 'react';
import { StyledMDPGButtonLink } from '../MainMenu/MdButtonStyling';

function MdPGButtonLinkTemplate(props){
    return(
        <StyledMDPGButtonLink className='p-3 m-1 flex-grow-1' to={props.pathway}>{props.textDisplayed}</StyledMDPGButtonLink>
    );
}
export default MdPGButtonLinkTemplate;