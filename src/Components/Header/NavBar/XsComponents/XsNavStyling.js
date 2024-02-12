import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';

export const XsStyledNavLink = styled(NavLink)`
    text-decoration: none;
    color: #000000;
    &:hover{
        background-color: #4d4d4d;
        cursor: pointer;
        text-decoration: underline;
    }
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

export const HideXsNavBarContainer = styled(Container)`
    @media screen and (min-width: 768px){
        display: none;
    }
`;

