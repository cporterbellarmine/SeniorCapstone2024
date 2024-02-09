import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';

export const XsStyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &:hover{
        background-color: #4d4d4d;
        color: white;
        cursor: pointer;
        text-decoration: underline;
    }
`;

export const XsStyledToggle = styled(Dropdown.Toggle)`
    background-color: #d34f3f;
    color: white;
    border: #19647e;
    &:active{
        background-color: yellow;
        color: #000000;
        cursor: pointer;
        text-decoration: underline;
    };
    &:hover{
        background-color: #c2c2c2;
        color: #000000;
        cursor: pointer;
        text-decoration: underline;
    };
    
`;

export const XsDropdownNavMenu = styled(Dropdown.Menu)`
    background-color: #d9d9d9;
`;

export const XsStyledDropdownItem = styled(Dropdown.Item)`
    &:hover{
        background-color: #c2c2c2;
        color: #000000;
        cursor: pointer;
        text-decoration: underline;
}
`;

