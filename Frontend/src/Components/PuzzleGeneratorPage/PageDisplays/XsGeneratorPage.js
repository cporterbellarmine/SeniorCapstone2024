// Used in /src/Pages/PuzzleGeneratorPage

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import GenerateButton from '../Components/Buttons/FunctionButtons/GenerateButton';
import CreatePDFButton from '../Components/Buttons/FunctionButtons/CreatePDFButton';
import ReloadButton from '../Components/Buttons/FunctionButtons/ReloadButton';
import PreviewDisplay from '../Components/DisplayContainers/PreviewDisplay';
import DifficultyDropdown from '../Components/Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Components/Dropdowns/TopicDropdown';
import { SubCol, ButtonRow, StyledTitleRow, InstructionsRowStyled } from '../Components/DisplayContainers/PreviewStyledComponents';
import { HideXsContainer } from './ViewContainer';

const XsGeneratorPage = () => {
    return(
        <HideXsContainer>
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
                    <Row className='order-3 p-3'>
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
        </HideXsContainer>
    );
};
export default XsGeneratorPage;