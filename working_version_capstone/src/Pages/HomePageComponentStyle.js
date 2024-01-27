import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export const XsTitleRow = styled(Row)`
    @media screen and (min-width: 768px){
        display: none;
    }
`;

export const MdTitleRow = styled(Row)`
    @media screen and (max-width: 767px){
        display: none;
    }
`;


export const StyledContainer = styled(Container)`
    background-color: darkgrey;
`;

export const StyledMenuCol = styled(Col)`
    background-color: gainsboro;
`;

export const PhotoCol = styled(Col)`
    background-color: crimson;
`;
