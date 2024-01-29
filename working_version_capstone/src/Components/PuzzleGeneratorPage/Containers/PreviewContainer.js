import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import PreviewDisplay from './PreviewDisplay';
import GenerateButton from '../Buttons/FunctionButtons/GenerateButton';
import CreatePDFButton from '../Buttons/FunctionButtons/CreatePDFButton';
import ReloadButton from '../Buttons/FunctionButtons/ReloadButton';
import { SubCol, ButtonRow, StyledTitleRow } from './PreviewStyledComponents';

const PreviewContainer = () => {
    return(
        <Container>
            <Row className='d-flex'>
                <SubCol>
                    <StyledTitleRow className='p-3'>
                        <h1>Puzzle Generator</h1>
                    </StyledTitleRow>
                    <Row className='p-2'>
                        <PreviewDisplay />
                    </Row>
                    <ButtonRow className='p-3 align-items-center'>
                        <Col>
                            <GenerateButton />
                        </Col>
                        <Col>
                            <Stack gap={1}>
                                <ReloadButton />
                                <CreatePDFButton />
                            </Stack>
                        </Col>
                    </ButtonRow>
                </SubCol>
            </Row>
            
        </Container>
    );
};
export default PreviewContainer;