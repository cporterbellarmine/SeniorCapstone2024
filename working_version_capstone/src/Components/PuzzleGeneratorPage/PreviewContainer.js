import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import PreviewDisplay from './PreviewContainer/PreviewDisplay';
import GenerateButton from './Buttons/FunctionButtons/GenerateButton';
import CreatePDFButton from './Buttons/FunctionButtons/CreatePDFButton';
import ReloadButton from './Buttons/FunctionButtons/ReloadButton';

const PreviewContainer = () => {
    return(
        <Container>
            <Col>
                <Row>
                    <h1>Puzzle Generator</h1>
                </Row>
                <Row>
                    <PreviewDisplay />
                </Row>
                <Row>
                    <Col>
                        <GenerateButton />
                    </Col>
                    <Col>
                        <Stack gap={1}>
                            <ReloadButton />
                            <CreatePDFButton />
                        </Stack>
                    </Col>
                </Row>
            </Col>
        </Container>
    );
};
export default PreviewContainer;