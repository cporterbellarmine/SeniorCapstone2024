import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';

// Used in /Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer
export const MdMainContainerBackground = styled(Container)`
    @media screen and (max-width: 767px){
        display: none;
    };
`;

// Used in /Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer
export const XsMainContainerBackground = styled(Container)`
    @media screen and (min-width: 768px){
        display: none;
    };
`;

// Used in /Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer
export const SubCol = styled(Col)`
    background-color: #88d0e7;
`;

// Used in  /Components/PreviewTopics/Components/DatabaseDisplays/TopicsListChoose
export const TopicsParentContainer = styled(Container)`
    background-color: gold;
`;

// Used in /Components/PreviewTopics/Components/DatabaseDisplays/WordsPreviewTable
export const WordsParentContainer = styled(Container)`
    background-color: mediumaquamarine;
`;