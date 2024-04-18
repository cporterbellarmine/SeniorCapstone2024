import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MdPuzzleGeneratorButtonLayout from '../Layout/MdPGButtonLayout';
import PuzzleGenerator from '../../../../../../../Pages/PuzzleGeneratorPage';

function MdPuzzleGeneratorButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<MdPuzzleGeneratorButtonLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
            </Route>
        </Routes>
    );
};
export default MdPuzzleGeneratorButtonRouting;