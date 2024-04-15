import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PuzzleGeneratorAccordionLayout from './XsPuzzleGeneratorAccordionLayout';
import PuzzleGenerator from '../../../../../Pages/PuzzleGeneratorPage';

function XsPuzzleGeneratorAccordionRouting(){
    return(
        <Routes>
            <Route path='/*' element={<PuzzleGeneratorAccordionLayout />}>
                <Route pathName='puzzle-generator' displayPage={<PuzzleGenerator />} />
            </Route>
        </Routes>
    );
};
export default XsPuzzleGeneratorAccordionRouting;