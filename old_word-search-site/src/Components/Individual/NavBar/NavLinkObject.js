import React from 'react';
import {NavLink} from "./navBarElements";

function NavLinkObject(props){
    const displayName = props.displayName;

    return(
        <NavLink to={props.pageName}>{displayName}</NavLink>
    );

}

export default NavLinkObject;