import React from 'react';
import { ButtonsStyle } from './PreviewTopicsStyling';

function PreviewTopicsButtonLinkTemplate(props){
    return(
        <ButtonsStyle className='p-1 p-md-2 p-lg-3 m-3' to={props.pathway}>{props.textDisplayed}</ButtonsStyle>
    );
}
export default PreviewTopicsButtonLinkTemplate;