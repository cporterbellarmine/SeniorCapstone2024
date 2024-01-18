import React from 'react';
import {NavLinkMainMenu} from './navBarElements';

function NavLinkMainMenuObject(props){
    const displayName = props.displayName;

    return(
        <NavLinkMainMenu to={props.pageName}>{displayName}</NavLinkMainMenu>
    );

}
export default NavLinkMainMenuObject;