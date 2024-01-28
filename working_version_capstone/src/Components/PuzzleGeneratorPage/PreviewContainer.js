import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import PreviewDisplay from './Containers/PreviewDisplay';
import GenerateButton from '../PuzzleGeneratorPage/Buttons/FunctionButtons/GenerateButton';
import CreatePDFButton from '../PuzzleGeneratorPage/Buttons/FunctionButtons/CreatePDFButton';
import ReloadButton from '../PuzzleGeneratorPage/Buttons/FunctionButtons/ReloadButton';
import { SubCol, ButtonRow } from './PreviewStyledComponents';

const PreviewContainer = () => {
    return(
        <Container>
            <SubCol className='p-3 m-2'>
                <Row>
                    <h1>Puzzle Generator</h1>
                </Row>
                <Row>
                    <PreviewDisplay />
                </Row>
                <Row className='p-2 m-2'>
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
            </SubCol>
        </Container>
    );
};
export default PreviewContainer;