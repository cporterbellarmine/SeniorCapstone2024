import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledMDPGButtonLink = styled(NavLink)`
    display: inline-grid;
    border: thin solid #000000;
    place-content: center;
    color: #8c035e;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
    &:active{
        color: white;
        cursor: pointer;
    }
`;

export const StyledMDVTButtonLink = styled(NavLink)`
    display: inline-grid;
    border: thin solid #000000;
    place-content: center;
    color: #d13523;
    text-decoration: none;
    &:hover{
        cursor: pointer;
    }
    &:active{
        color: white;
        cursor: pointer;
    }
`;