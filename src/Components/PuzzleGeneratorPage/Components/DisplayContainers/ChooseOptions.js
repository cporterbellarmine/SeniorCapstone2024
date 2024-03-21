import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NoPreviewBorderCol } from './PreviewStyledComponents';

const ChooseOptions = () => {
    return(
        <Container>
            <Col className='align-text-center'>
                <Row>
                    <Col className='col-2'/>
                    <NoPreviewBorderCol className='col-8 mb-2'>
                        <h2 className='p-3'>Please choose a topic and a difficulty to display a puzzle.</h2>
                    </NoPreviewBorderCol>
                    <Col className='col-2'/>
                </Row>
                
            </Col>
        </Container>
    );
};
export default ChooseOptions;