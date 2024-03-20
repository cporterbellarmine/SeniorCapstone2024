import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

// Used in /Components/HomePage/ButtonLinkTemplate
export const ButtonsStyle = styled(NavLink)`
    display: inline-grid;
    border: solid 1px #c03021;
    place-content: center;
    background-color: #de4f3f;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: #d13523;
        border: solid 1px #9d281b;
        cursor: pointer;
    }
`;