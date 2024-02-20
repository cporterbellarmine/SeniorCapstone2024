import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledButtonLink = styled(NavLink)`
    display: inline-grid;
    border: thin solid #0d3644;
    place-content: center;
    background-color: #19647e;
    color: white;
    text-decoration: none;
    &:hover{
        background-color: #2288aa;
        border: thin solid #19647e;
        color: white;
        cursor: pointer;
        text-decoration: underline;
    }
    &:active{
        background-color: #145266;
        border: thin solid #071b22;
        color: white;
        cursor: pointer;
        text-decoration: underline;
    }
`;