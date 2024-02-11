import React from 'react';
import { StyledNavLink } from './MdNavStlying';

function MdNavigationLinkTemplate(props){
    return(
        <StyledNavLink className='text-center p-2' to={props.pathway} style={({isActive}) => {
            return isActive ? {
                    backgroundColor: '#dc493a',
                    color: 'white',
                    textDecoration: 'underline'
                } : {  };
            }
        }>{props.textDisplayed}</StyledNavLink>
    );
}
export default MdNavigationLinkTemplate;