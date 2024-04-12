import React from 'react';
import { StyledButtonLink } from '../ButtonStyling';

function MainMenuButtonLinkTemplate(props){
    return(
        <StyledButtonLink className='p-4 m-3' to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}

export default MainMenuButtonLinkTemplate;

