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

export const XsDropdownNavMenu = styled(Dropdown.Menu)`
    background-color: pink;
`;

