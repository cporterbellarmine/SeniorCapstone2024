// Used in /Components/Header/NavBarRouting
// Used in /Components/HomePage/ButtonNavRouting
// Used in /Components/PuzzleGeneratorPage/Buttons/NavButtons/PreviewButtonRouting

import React from 'react';
import Container from 'react-bootstrap/Container';
import MdPreviewTopicsContainer from '../Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer';

const ViewTopics = () => {
    return(
        <Container>
            <h1>View Topics Page</h1>
            <MdPreviewTopicsContainer />
        </Container>
    );
}
export default ViewTopics;