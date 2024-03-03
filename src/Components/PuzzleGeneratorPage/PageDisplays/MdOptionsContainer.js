// Used in /Components/PuzzleGenerator/PageDisplays/MdGeneratorPage

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Components/Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Components/Dropdowns/TopicDropdown';
import { InstructionsRowStyled, SubCol } from '../Components/DisplayContainers/PreviewStyledComponents';

const MdOptionsContainer = () => {

    const [topic, setTopic] = useState('');

    return(
        <Container>
            <Row>
                <SubCol>
                    <Row>
                        <PreviewButtonRouting />
                    </Row>
                    <Row className='order-3 pt-2 pb-4'>
                        <Stack gap={2}>
                            <TopicDropdown callback={setTopic} />
                            <DifficultyDropdown topic={topic} />
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