import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const StyledStackXsRow = styled(Row)`
    background-color: skyblue;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

// export const StyledStackMdRow = styled(Row)`
//     background-color: skyblue;

//     @media screen and (min-width: 768px){
//         display: none;
//     }
// `;

export const StyledXsGenerateButtonRow = styled(Row)`
    background-color: skyblue;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const StyledXsPreviewDisplay = styled(Container)`
    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const StyledMdPreviewDisplayContainer = styled(Container)`
    @media screen and (min-width: 768px){
    display: none;
}
`;

export const PreviewContainerRow = styled(Row)`
    border: solid;
    border-width: thin;
    background-color: white;
`;