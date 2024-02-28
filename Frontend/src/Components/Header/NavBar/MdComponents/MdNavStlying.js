import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

export const StyledNavLink = styled(NavLink)`
    display: inline-grid;
    align-content: center;
    color: #ffffff;
    text-decoration: none;
    &:hover{
        background-color: #e37063;
        color: #000000;
        cursor: pointer;
        text-decoration: underline;
    }
    &:active{
        background-color: #d03625;
        color: #ffffff;
    }
`;

export const HideMdNavBarContainer = styled(Container)`
    @media screen and (max-width: 767px){
        display: none;
    }
`;