// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdGeneratorPage

import React, {useState, useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import GenerateButton from '../Components/Buttons/FunctionButtons/GenerateButton';
import CreatePDFButton from '../Components/Buttons/FunctionButtons/CreatePDFButton';
import ReloadButton from '../Components/Buttons/FunctionButtons/ReloadButton';
import PreviewDisplay from '../Components/DisplayContainers/PreviewDisplay';
import { SubCol, ButtonRow, StyledTitleRow } from '../Components/DisplayContainers/PreviewStyledComponents';

//Topic & difficulty are held in \PuzzleGeneratorPage\PageDisplays\MdGeneratorPage and passed down to
//\PuzzleGeneratorPage\Components\Buttons\FunctionButtons\GenerateButton.
//Generating the puzzle does not influence the values.

const MdPreviewContainer = ({ topic, difficulty }) => {

    const[puzzle, setPuzzle] = useState([]);

    return(
        <Container>
            <Row className='d-flex'>
                <SubCol>
                    <StyledTitleRow className='p-3'>
                        <h1>Puzzle Generator</h1>
                    </StyledTitleRow>
                    <Row className='p-2'>
                        <PreviewDisplay puzzle={puzzle}/>
                    </Row>
                    <ButtonRow className='p-3 align-items-center'>
                        <Col>
                            <GenerateButton topic={topic} callback={setPuzzle} difficulty={difficulty}/>
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
export default MdPreviewContainer;