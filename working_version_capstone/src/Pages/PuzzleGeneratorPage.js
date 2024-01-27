import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OptionsContainer from '../Components/PuzzleGeneratorPage/OptionsContainer';
import PreviewContainer from '../Components/PuzzleGeneratorPage/PreviewContainer';

const PuzzleGenerator = () => {
    return(
        <Container>
            <Row>
                <h1>Puzzle Generator Page</h1>
                <Col>
                    <OptionsContainer />
                </Col>
                <Col>
                    <PreviewContainer />
                </Col>
            </Row>
        </Container>
    );
}
export default PuzzleGenerator;