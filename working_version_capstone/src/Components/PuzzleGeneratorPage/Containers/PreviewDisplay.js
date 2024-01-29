import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { PreviewContainerRow } from './PreviewDisplayStyling';

const PreviewDisplay = () => {
    return(
        <Container>
            <Col>
                <Row>
                    <h2>Preview</h2>
                </Row>
                <PreviewContainerRow className='m-2'>
                    <h3>Puzzle Preview Container</h3>
                </PreviewContainerRow>
            </Col>
        </Container>
   );
};
export default PreviewDisplay;