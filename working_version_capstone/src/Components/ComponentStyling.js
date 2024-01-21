import { Link } from 'react-router-dom';
import styled from "styled-components";

export const StyledMenuBarNav = styled.nav`
    display: flex;
    justify-content: flex-start;
    background: crimson;
`;

export const StyledMenuBarLink = styled(Link)`
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
    height: 100%;
    grid-gap: 1dvh;
    padding: 4%;
    margin: 5%;
    width: 40%;
    background-color: darkorange;
`;

export const StyledButtonLink = styled(Link)`
    display: grid;
    //height: vh;
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