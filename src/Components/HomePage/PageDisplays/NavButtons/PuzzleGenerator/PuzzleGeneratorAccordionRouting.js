import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PuzzleGeneratorAccordionLayout from './PuzzleGeneratorAccordionLayout';
import PuzzleGenerator from '../../../../../Pages/PuzzleGeneratorPage';

function PuzzleGeneratorAccordionRouting(){
    return(
        <Routes>
            <Route path='/*' element={<PuzzleGeneratorAccordionLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
            </Route>
        </Routes>
    );
};
export default PuzzleGeneratorAccordionRouting;