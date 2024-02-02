// Used in /Components/HomePage/ButtonNavLayout
// Used in /Components/PuzzleGenerator/NavButtons/PreviewButtonLayout
// Used in /Components/PreviewTopicsPage/Components/Buttons/MdNav/MdNavButtonsLayout
// Used in /Components/PreviewTopicsPage/Components/Buttons/XsNav/XsNavButtonsLayout

import React from 'react';
import { StyledButtonLink } from './ComponentStyling';

function ButtonLinkTemplate(props){
    return(
        <StyledButtonLink className='p-1 p-md-2 p-lg-3 m-3' to={props.pathway}>{props.textDisplayed}</StyledButtonLink>
    );
}
export default ButtonLinkTemplate;