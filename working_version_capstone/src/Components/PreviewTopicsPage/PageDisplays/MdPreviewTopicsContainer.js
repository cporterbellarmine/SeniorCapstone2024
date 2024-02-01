import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const MdPreviewTopicsContainer = () => {
    return(
        <Container>
            <Row>
                <Col>
                    <Row>
                        <h1>Preview Topics</h1>
                    </Row>
                    <Row>
                        <Col>
                            <h2>Topic Component here</h2>
                        </Col>
                        <Col>
                            <h2>Word Preview Component here</h2>
                        </Col>
                    </Row>
                    <Row>
                        <h2>Button Stack Here</h2>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default MdPreviewTopicsContainer;