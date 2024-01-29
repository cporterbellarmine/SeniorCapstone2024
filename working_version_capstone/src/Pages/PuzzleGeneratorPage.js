import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BackgroundContainer } from './PuzzleGeneratorComponents';
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