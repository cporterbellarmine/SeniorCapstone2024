import styled from 'styled-components';
import Container from 'react-bootstrap/Container';

//Used in /Components/PuzzleGeneratorPage/PageDisplay/XsGeneratorPage
export const HideXsContainer = styled(Container)`
    background-color: #d9d9d9;

    @media screen and (min-width: 768px){
        display: none;
    };
`;

//Used in /Components/PuzzleGeneratorPage/PageDisplay/XsGeneratorPage
export const HideMdContainer = styled(Container)`
    background-color: #000000;

`;