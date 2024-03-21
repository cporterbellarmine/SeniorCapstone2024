// Used in /Components/PuzzleGenerator/PageDisplays/MdGeneratorPage

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Components/Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Components/Dropdowns/TopicDropdown';
import { InstructionsCol } from './ContainerStyling';
import { InstructionsRowStyled, SubCol } from '../Components/DisplayContainers/PreviewStyledComponents';

const MdOptionsContainer = ({ topicCallback, topic, difficultyCallback }) => {

    console.log({topic});

    const[selected, setSelected] = useState('');

    return(
        <Container>
            <Row>
                <Col>
                    <Row className='order-3 pt-2 pb-4'>
                        <Stack gap={2}>
                            <TopicDropdown topicCallback={topicCallback} difficultyCallback={difficultyCallback} selectedCallback={setSelected}/>
                            <DifficultyDropdown topic={topic} difficultyCallback={difficultyCallback} selectedCallback={setSelected} selected={selected}/>
                        </Stack>
                    </Row>
                    <Row>
                        <InstructionsCol>
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
                        </InstructionsCol>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
};
export default MdOptionsContainer;