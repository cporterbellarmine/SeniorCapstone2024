// Used in /Components/Header/NavBarRouting
// Used in /Components/HomePage/ButtonNavRouting
// Used in /Components/PreviewTopicsPage/Components/Buttons/MdNav/MdNavButtonRouting
// Used in /Components/PreviewTopicsPage/Components/Buttons/XsNav/XsNavButtonRouting

import React from 'react';
import MdGeneratorPage from '../Components/PuzzleGeneratorPage/PageDisplays/MdGeneratorPage';
import XsGeneratorPage from '../Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage';

const PuzzleGenerator = () => {
    return(
        <>
            <XsGeneratorPage />
            <MdGeneratorPage />
        </>
    );
}
export default PuzzleGenerator;