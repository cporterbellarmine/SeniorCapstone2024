import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import styled from "styled-components";

export const StyledMenuBarNav = styled.nav`
    justify-content: flex-start;
    background: crimson;
`;

export const StyledBSNavBar = styled(Nav)`
    background-color: crimson;
`;

export const StyledNavLink = styled(NavLink)`
    padding: 1%;
    display: inline-grid;
    background-color: crimson;
    border-left: solid;
    border-right: solid;
    border-width: thin;
    align-content: center;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: maroon;
        color: white;
    }
`;

export const StyledButtonNav = styled.nav`
    padding: 4%;
`;

export const StyledButtonLink = styled(NavLink)`
    display: grid;
    padding: 5%;
    margin: 5%;
    outline: solid;
    place-content: center;
    background-color: crimson;
    color: black;
    text-decoration: none;
    &:hover{
        background-color: maroon;
        color: white;
    }
`;

export const StyledMenuCol = styled(Col)`
    background-color: gainsboro;
`;

export const StyledNavBarStack = styled(Stack)`
    display: inline-flex;
`;