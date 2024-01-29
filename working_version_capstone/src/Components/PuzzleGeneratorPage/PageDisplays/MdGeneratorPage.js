import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MdOptionsContainer from './MdOptionsContainer';
import MdPreviewContainer from './MdPreviewContainer';

const MdGeneratorPage = () => {
    return(
        <Container>
            <Row className='p-4 d-flex'>
                <h1>Puzzle Generator Page</h1>
                <Col>
                    <MdOptionsContainer />
                </Col>
                <Col>
                   <MdPreviewContainer />
                </Col>
            </Row>
        </Container>
    );
};
export default MdGeneratorPage