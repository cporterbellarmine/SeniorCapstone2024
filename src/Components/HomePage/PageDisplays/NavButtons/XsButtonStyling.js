import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledXSPGButtonLink = styled(NavLink)`
    display: inline-grid;
    border: thin solid #000000;
    place-content: center;
    background-color: #a4036f;
    text-shadow: 2px 2px #000000;
    color: #ffffff;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
    &:active{
        color: white;
        cursor: pointer;
    }
`;

export const StyledXSVTButtonLink = styled(NavLink)`
    display: inline-grid;
    border: thin solid #000000;
    place-content: center;
    background-color: #de4f3f;
    text-shadow: 2px 2px #000000;
    color: #ffffff;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
    &:active{
        color: white;
        cursor: pointer;
    }
`;