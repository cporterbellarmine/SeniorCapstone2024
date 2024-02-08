import React from 'react';
import { XsStyledNavLink } from './XsNavStyling';

function XsNavLinkTemplate(props){
    return(
        <XsStyledNavLink className='text-center p-2' to={props.pathway} style={({isActive}) => {
            return isActive ? {
                    backgroundColor: '#a4036f',
                    color: 'white',
                    textDecoration: 'underline'
                } : {
                    backgroundColor: '#000000',
                    color: 'white'
                };
            }
        }>{props.textDisplayed}</XsStyledNavLink>
    );
}
export default XsNavLinkTemplate;