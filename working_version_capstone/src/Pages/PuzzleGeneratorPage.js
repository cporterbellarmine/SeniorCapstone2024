import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BackgroundContainer } from './PuzzleGeneratorComponents';
import OptionsContainer from '../Components/PuzzleGeneratorPage/Containers/OptionsContainer';
import PreviewContainer from '../Components/PuzzleGeneratorPage/Containers/PreviewContainer';

const PuzzleGenerator = () => {
    return(
        <BackgroundContainer>
            <Row className='p-4 d-flex'>
                <h1>Puzzle Generator Page</h1>
                <Col>
                    <OptionsContainer />
                </Col>
                <Col>
                   <PreviewContainer />
                </Col>
            </Row>
        </BackgroundContainer>
    );
}
export default PuzzleGenerator;