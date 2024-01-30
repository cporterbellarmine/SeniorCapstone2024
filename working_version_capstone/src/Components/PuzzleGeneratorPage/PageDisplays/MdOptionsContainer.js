// Used in /Components/PuzzleGenerator/PageDisplays/MdGeneratorPage

import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Dropdowns/TopicDropdown';
import { InstructionsRowStyled } from '../Containers/PreviewStyledComponents';
import { SubCol } from '../Containers/PreviewStyledComponents';

const MdOptionsContainer = () => {
    return(
        <Container>
            <Row>
                <SubCol>
                    <Row>
                        <PreviewButtonRouting />
                    </Row>
                    <Row className='order-3 pt-2 pb-4'>
                        <Stack gap={2}>
                            <TopicDropdown />
                            <DifficultyDropdown />
                        </Stack>
                    </Row>
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
                </SubCol>
            </Row>
        </Container>
    );
};
export default MdOptionsContainer;