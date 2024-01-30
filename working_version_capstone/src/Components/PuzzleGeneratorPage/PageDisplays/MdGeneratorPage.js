import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MdOptionsContainer from './MdOptionsContainer';
import MdPreviewContainer from './MdPreviewContainer';
import { HideMdContainer } from './ViewContainer';

const MdGeneratorPage = () => {
    return(
        <HideMdContainer>
            <Row className='p-4 d-flex'>
                <Col>
                    <MdOptionsContainer />
                </Col>
                <Col>
                   <MdPreviewContainer />
                </Col>
            </Row>
        </HideMdContainer>
    );
};
export default MdGeneratorPage