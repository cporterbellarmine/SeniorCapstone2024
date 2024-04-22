import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage
export const SubCol = styled(Col)`
    background-color: rosybrown;
`;

// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage
export const ButtonRow = styled(Row)`
    border-top: solid 1px #000000;
`;

// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage
export const StyledTitleRow = styled(Row)`
    background-color: lightsteelblue;
`;

// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage
export const InstructionsRowStyled = styled(Row)`
    background-color: sandybrown;
`;

// Used in /Components/PuzzleGeneratorPage/Components/DisplayContainers/PreviewDisplay
export const PreviewContainerRow = styled(Row)`
    border: solid;
    border-width: thin;
    background-color: white;
`;

export const NoPreviewBorderCol = styled(Col)`
    border: solid 1px #000000;
    background-color: #ffffff;
`;
