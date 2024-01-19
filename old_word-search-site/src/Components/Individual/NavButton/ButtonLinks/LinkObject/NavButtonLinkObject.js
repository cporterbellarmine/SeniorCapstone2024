import React from 'react';
import {NavBtnLink} from "../../../NavBar/navBarElements";

function NavButtonLinkObject(props){

    const buttonDisplayText = props.buttonDisplayText;

    return(
        <NavBtnLink to={props.displayName}>{buttonDisplayText}</NavBtnLink>
    );
}
export default NavButtonLinkObject;