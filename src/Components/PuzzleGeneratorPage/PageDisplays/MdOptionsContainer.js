// Used in /Components/PuzzleGenerator/PageDisplays/MdGeneratorPage

import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import PreviewButtonRouting from '../Components/Buttons/NavButtons/PreviewButtonRouting';
import DifficultyDropdown from '../Components/Dropdowns/DifficultyDropdown';
import TopicDropdown from '../Components/Dropdowns/TopicDropdown';
import GenerateButton from '../Components/Buttons/FunctionButtons/GenerateButton';
import { InstructionsColMd, InstructionsRowTitleMd, InstructionsRowNumbersMd } from './ContainerStyling';
import { InstructionsRowStyled, SubCol } from '../Components/DisplayContainers/PreviewStyledComponents';

const MdOptionsContainer = ({ topicCallback, topic, difficultyCallback,  difficulty }) => {

    const[selected, setSelected] = useState('');
    const[puzzle, setPuzzle] = useState(["To display the chosen puzzle words, click Generate."]);

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
                </Col>
            </Row>
            {/* <Row>
                <GenerateButton topic={topic} callback={setPuzzle} difficulty={difficulty}/>
            </Row> */}
        </Container>
    );
};
export default MdOptionsContainer;