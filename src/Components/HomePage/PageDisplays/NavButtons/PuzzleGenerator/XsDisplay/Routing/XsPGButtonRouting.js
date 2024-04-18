import React from 'react';
import { Route, Routes } from 'react-router-dom';
import XsPGButtonLayout from '../Layout/XsPGButtonLayout';
import PuzzleGenerator from '../../../../../../../Pages/PuzzleGeneratorPage';

function MdPuzzleGeneratorButtonRouting(){
    return(
        <Routes>
            <Route path='/*' element={<XsPGButtonLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
            </Route>
        </Routes>
    );
};
export default MdPuzzleGeneratorButtonRouting;