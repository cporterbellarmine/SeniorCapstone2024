import { Link, NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import styled from "styled-components";

export const StyledMenuBarNav = styled.nav`
    display: flex;
    justify-content: flex-start;
    background: crimson;
`;

export const StyledBSNavBar = styled(Nav)`
    background-color: crimson;

`;

export const StyledNavLink = styled(NavLink)`
    padding: 1%;
    display: inline-grid;
    height: 4dvh;
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
    display: grid;
    padding: 4%;
    width: 35vi;
    background-color: darkorange;
`;

export const StyledButtonLink = styled(Link)`
    display: grid;
    margin: 5%;
    padding: 5%;
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