// Used in /Components/Header/NavBarRouting
// Used in /Components/HomePage/ButtonNavRouting
// Used in /Components/PuzzleGeneratorPage/Buttons/NavButtons/PreviewButtonRouting

import React from 'react';
import Container from 'react-bootstrap/Container';
import MdPreviewTopicsContainer from '../Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer';
import XsPreviewTopicsContainer from '../Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer';

const ViewTopics = () => {
    return(
        <>
            <XsPreviewTopicsContainer />
            <MdPreviewTopicsContainer />
        </>
            
    );
}
export default ViewTopics;