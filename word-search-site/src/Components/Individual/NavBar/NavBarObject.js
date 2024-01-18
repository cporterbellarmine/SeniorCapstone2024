import React from 'react';
import {Nav, Bars} from "./navBarElements";
import NavMenuObject from './NavMenuObject';

function NavBarObject() {
    return(
        <Nav>
            <Bars />
            <NavMenuObject />
        </Nav>
    );

}

export default NavBarObject;