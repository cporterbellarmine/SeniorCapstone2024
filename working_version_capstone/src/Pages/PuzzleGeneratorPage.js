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