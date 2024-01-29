import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Buttons/NavButtons/PreviewButtonRouting';
import GenerateButton from '../Buttons/FunctionButtons/GenerateButton';
import CreatePDFButton from '../Buttons/FunctionButtons/CreatePDFButton';
import ReloadButton from '../Buttons/FunctionButtons/ReloadButton';
import PreviewDisplay from './PreviewDisplay';
import DifficultyDropdown from '../Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Dropdowns/TopicDropdown';
import { SubCol, ButtonRow, StyledTitleRow } from './PreviewStyledComponents';
import { InstructionsRowStyled } from './PreviewStyledComponents';

const XsGeneratorPage = () => {
    return(
        <Container>
            <Row>
                <SubCol>
                    <Row>
                        <PreviewButtonRouting />
                    </Row>
                    <StyledTitleRow className='p-3'>
                        <h1>Puzzle Generator</h1>
                    </StyledTitleRow>
                    <InstructionsRowStyled>
                        <Col>
                            <Row>
                                <h2>Instructions</h2>
                            </Row>
                            <Row>
                                <div>
                                    <ol>
                                        <li>
                                            <p>Step 1</p>
                                        </li>
                                        <li>
                                            <p>Step 2</p>
                                        </li>
                                        <li>
                                            <p>Step 3</p>
                                        </li>
                                    </ol>
                                </div>
                                
                            </Row>
                        </Col>
                    </InstructionsRowStyled>
                    <Row className='order-3 py-4'>
                        <Stack gap={2}>
                            <TopicDropdown />
                            <DifficultyDropdown />
                        </Stack>
                    </Row>
                    <ButtonRow className='p-3 align-items-center'>
                        <Col>
                            <GenerateButton />
                        </Col>
                    </ButtonRow>
                    <Row className='p-2'>
                        <PreviewDisplay />
                    </Row>
                    <ButtonRow className='p-3 align-items-center'>
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
export default XsGeneratorPage;