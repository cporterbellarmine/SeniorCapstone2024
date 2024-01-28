import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const PreviewDisplay = () => {
    return(
        <Container>
            <Col>
                <Row>
                    <h2>Preview</h2>
                </Row>
                <Row>
                    <h3>Puzzle Preview Container</h3>
                </Row>
            </Col>
        </Container>
   );
};
export default PreviewDisplay;