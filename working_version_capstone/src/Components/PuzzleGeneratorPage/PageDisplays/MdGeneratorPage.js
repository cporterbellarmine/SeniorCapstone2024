// Used in /src/Pages/PuzzleGeneratorPage

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import MdOptionsContainer from './MdOptionsContainer';
import MdPreviewContainer from './MdPreviewContainer';
import { HideMdContainer } from './ViewContainer';

const MdGeneratorPage = () => {
    return(
        <HideMdContainer>
            <Row className='p-4 d-flex'>
                <h1>Puzzle Generator Page</h1>
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