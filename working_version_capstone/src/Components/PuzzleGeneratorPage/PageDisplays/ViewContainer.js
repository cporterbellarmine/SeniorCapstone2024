import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

//Used in /Components/PuzzleGenerator/PageDisplay/XsGeneratorPage
export const HideXsContainer = styled(Container)`
    background-color: darkgrey;

    @media screen and (min-width: 768px){
        display: none;
    };
`;

//Used in /Components/PuzzleGenerator/PageDisplay/XsGeneratorPage
export const HideMdContainer = styled(Container)`
    background-color: darkgrey;

    @media screen and (max-width: 767px){
        display: none;
    };
`;