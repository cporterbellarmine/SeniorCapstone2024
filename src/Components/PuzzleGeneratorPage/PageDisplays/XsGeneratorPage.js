// Used in /src/Pages/PuzzleGeneratorPage

import React, {useState, useEffect} from 'react';
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
import ChooseOptions from '../Components/DisplayContainers/ChooseOptions';
import GeneratorBackgroundHalf from '../../Images/GeneratorBackgroundHalf.png';
import { PhotoRow, TitleRow, WhiteTitle, InstructionsColXs, OptionsRow, PreviewRow, InstructionsRowTitleXs, InstructionsRowNumbersXs, WhiteHeader } from './ContainerStyling';
import { HideXsContainer } from './ViewContainer';

const XsGeneratorPage = () => {

    const[selected, setSelected] = useState('');
    const[topic, setTopic] = useState(''); //Used to store the chosen topic in the OptionsContainer.
    const[difficulty, setDifficulty] = useState(''); //Used to store the chosen topic in the OptionsContainer.
    const[puzzle, setPuzzle] = useState([]);

    return(
        <HideXsContainer>
            <Row>
                <Col>
                    <PhotoRow>
                        <img src={GeneratorBackgroundHalf} className='p-0 m-0' alt='Generator Page Cover Photo'/>
                    </PhotoRow>
                
                    <TitleRow>
                        <Col className='col-4'>
                            <PreviewButtonRouting />
                        </Col>
                        <Col className='col-6'>
                            <WhiteTitle className='p-2'>Puzzle Generator</WhiteTitle>
                        </Col>
                        <Col className='col-2'/>
                        
                    </TitleRow>
                    <Row>
                        <Col>
                            <InstructionsRowTitleXs>
                                <WhiteHeader className='p-2'>Instructions</WhiteHeader>
                            </InstructionsRowTitleXs>
                            <InstructionsRowNumbersXs className='p-3'>
                                <div>
                                    <ol>
                                        <li>
                                            <p><b>Choose a topic</b> in the 'Click to choose a topic.' dropdown menu.</p>
                                        </li>
                                        <li>
                                            <p><b>Choose a difficulty</b> in the 'Click to choose a difficulty.' dropdown menu.</p>
                                        </li>
                                    </ol>
                                </div>
                            </InstructionsRowNumbersXs>
                        </Col>
                    </Row>
                    <OptionsRow>
                        <Col>
                            <Row className='order-3 p-3'>
                                <Stack gap={2}>
                                    <TopicDropdown topicCallback={setTopic} difficultyCallback={setDifficulty} selectedCallback={setSelected}/>
                                    <DifficultyDropdown topic={topic} difficultyCallback={setDifficulty} selectedCallback={setSelected} selected={selected}/>
                                </Stack>
                            </Row>
                            <Row className='pb-3 px-3 align-items-center'>
                                <Col>
                                    <GenerateButton topic={topic} callback={setPuzzle} difficulty={difficulty}/>
                                </Col>
                            </Row>
                        </Col>
                    </OptionsRow>
                    <PreviewRow>
                        <Col>
                            <Row className='pt-4'>
                                <ChooseOptions />
                            </Row>
                            {/* <Row className='p-3 align-items-center'>
                                <Col>
                                    <Stack gap={1}>
                                        <ReloadButton />
                                        <CreatePDFButton />
                                    </Stack>
                                </Col>
                            </Row> */}
                        </Col>
                    </PreviewRow>
                </Col>
            </Row>
        </HideXsContainer>
    );
};
export default XsGeneratorPage;