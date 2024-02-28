import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Used in /src/Pages/HomePage
export const XsTitleRow = styled(Row)`
    @media screen and (min-width: 769px){
        display: none;
    }
`;

// Used in /src/Pages/HomePage
export const MdTitleRow = styled(Row)`
    @media screen and (max-width: 768px){
        display: none;
    }
`;

// Used in /src/Pages/HomePage
export const StyledContainer = styled(Container)`
    background-color: #D9d9d9;
`;

// Used in /src/Pages/HomePage
export const StyledMenuCol = styled(Col)`
    background-color: gainsboro;
`;

// Used in /src/Pages/HomePage
export const PhotoCol = styled(Col)`
    background-color: crimson;
`;
