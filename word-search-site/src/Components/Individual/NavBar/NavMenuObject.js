import React from 'react';
import {NavMenu} from './navBarElements';
import NavLinkObject from './NavLinkObject';
import NavLinkMainMenuObject from './NavLinkMainMenuObject';

function NavMenuObject(){

    return(
        <NavMenu>
            <NavLinkMainMenuObject pageName="/home" displayName="Home"/>
            <NavLinkMainMenuObject pageName="/puzzle-generator" displayName="Puzzle Generator"/>
            <NavLinkMainMenuObject pageName="/view-topics" displayName="View Topics"/>
            <NavLinkObject pageName="/create-topic" displayName="Create Topic"/>
        </NavMenu>
    );
}

export default NavMenuObject;