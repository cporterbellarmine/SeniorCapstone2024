import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PuzzleGeneratorButtonLayout from './PuzzleGeneratorButtonLayout';
import PuzzleGenerator from '../../../../../Pages/PuzzleGeneratorPage';

function PuzzleGeneratorButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<PuzzleGeneratorButtonLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
            </Route>
        </Routes>
    );
};
export default PuzzleGeneratorButtonRouting;