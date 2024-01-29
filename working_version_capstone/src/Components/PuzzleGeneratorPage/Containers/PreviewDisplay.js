import React from 'react';
import Container from 'react-bootstrap/Container';
import { PreviewContainerRow } from './PreviewStyledComponents';

const XsPreviewDisplay = () => {
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
export default XsPreviewDisplay;