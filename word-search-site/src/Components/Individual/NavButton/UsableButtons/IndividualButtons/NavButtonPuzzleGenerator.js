import React from 'react';
import NavLinkPuzzleGenerator from '../../ButtonLinks/IndividualLinks/NavLinkPuzzleGenerator';
import './NavButtonPuzzleGenerator.css'
import {NavBtn} from '../../../NavBar/navBarElements';

function NavButtonPuzzleGenerator(){
    return(
        // <NavBtn>
            <NavLinkPuzzleGenerator /*className='NavButtonPuzzleGenerator-button'*//>
        // </NavBtn>
    );
}
export default NavButtonPuzzleGenerator;