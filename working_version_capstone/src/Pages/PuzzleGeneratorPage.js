import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BackgroundContainer } from './PuzzleGeneratorComponents';
import MdOptionsContainer from '../Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer';
import MdPreviewContainer from '../Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer';

const PuzzleGenerator = () => {
    return(
        <BackgroundContainer>
            <Row className='p-4 d-flex'>
                <h1>Puzzle Generator Page</h1>
                <Col>
                    <MdOptionsContainer />
                </Col>
                <Col>
                   <MdPreviewContainer />
                </Col>
            </Row>
        </BackgroundContainer>
    );
}
export default PuzzleGenerator;