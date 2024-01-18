import React from 'react';
import {NavMenu} from './navBarElements';
import NavLinkObject from './NavLinkObject';

function NavMenuObject(){

    return(
        <NavMenu>
            <NavLinkObject pageName="/home" displayName="Home"/>
            <NavLinkObject pageName="/puzzle-generator" displayName="Puzzle Generator"/>
            <NavLinkObject pageName="/view-topics" displayName="View Topics"/>
            <NavLinkObject pageName="/create-topic" displayName="Create Topic"/>
        </NavMenu>
    );
}

export default NavMenuObject;