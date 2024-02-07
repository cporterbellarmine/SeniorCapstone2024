// Used in /Components/Header/NavBarLayout

import React from 'react';
import { StyledNavLink } from '../ComponentStyling';

function NavigationLinkTemplate(props){
    return(
        <StyledNavLink className='text-center p-2' to={props.pathway} style={({isActive}) => {
            return isActive ? {
                    backgroundColor: '#a4036f',
                    color: 'white',
                    textDecoration: 'underline'
                } : {};
            }
        }>{props.textDisplayed}</StyledNavLink>
    );
}
export default NavigationLinkTemplate;