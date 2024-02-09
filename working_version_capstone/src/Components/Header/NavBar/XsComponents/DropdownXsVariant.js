import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

function DropdownXsVariant(){
    return(
        <style type='text/css'>
            {`
                .dropdown-toggle-variant{
                    &:active{
                        dropdown-link-active-bg: yellow;
                        color: #000000;
                        cursor: pointer;
                        text-decoration: underline;
                    }
                }
            
            `}
        </style>
    );
};
export default DropdownXsVariant;