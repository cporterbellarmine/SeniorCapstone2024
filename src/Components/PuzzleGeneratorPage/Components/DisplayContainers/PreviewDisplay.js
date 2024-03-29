// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PreviewContainerRow } from './PreviewStyledComponents';

const PreviewDisplay = ({ puzzle }) => {
    return(
        <Container>
            <Col>
                <Row>
                    <h2>Generated Puzzle</h2>
                </Row>
                <PreviewContainerRow className='m-2'>
                    <h3>Puzzle Preview Container</h3>
                </PreviewContainerRow>
            </Col>
        </Container>
    );
};
export default PreviewDisplay;