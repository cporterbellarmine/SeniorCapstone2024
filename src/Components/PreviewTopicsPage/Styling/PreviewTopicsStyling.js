import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Used in /Components/HomePage/ButtonLinkTemplate
export const ButtonsStyle = styled(NavLink)`
    display: inline-grid;
    outline: solid;
    place-content: center;
    background-color: crimson;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: maroon;
        color: white;
        cursor: pointer;
    }
`;