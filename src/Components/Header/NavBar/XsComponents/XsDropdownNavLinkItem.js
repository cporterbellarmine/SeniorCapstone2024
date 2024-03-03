import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { XsStyledNavLink, XsStyledDropdownItem } from './XsNavStyling';

function XsDropdownNavLinkItem(props){
    return(
        <XsStyledNavLink className='text-center d-flex' to={props.pathway} style={({isActive}) => {
            return isActive ? {
                    backgroundColor: '#e77f73',
                    textDecoration: 'underline'
                } : {
                    color: '#000000'
                };
            }}
        >
            <XsStyledDropdownItem as='div' className='text-center'>
                {props.textDisplayed}
            </XsStyledDropdownItem>
        </XsStyledNavLink>
    );
}
export default XsDropdownNavLinkItem;