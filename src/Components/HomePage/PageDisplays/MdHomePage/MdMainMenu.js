import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import WiderGeneratorBackgroundRow from '../../../Images/WiderGeneratorBackgroundRow1.png';
import MdMainMenuRouting from '../NavButtons/MainMenu/MdMainMenuRouting';
import MdPuzzleGeneratorButtonRouting from '../NavButtons/PuzzleGenerator/MdPuzzleGeneratorButtonRouting';
import MdViewTopicsRouting from '../NavButtons/ViewTopics/MdViewTopicsRouting';
import ViewTopicsButtonRouting from '../NavButtons/ViewTopics/ViewTopicsButtonRouting';
import { PGButtonRow, VTButtonRow } from './MdStyledComponents';
import './mdhomepage.css';


const MdMainMenu = () => {
    return (
        <div>
            <Row className='pg-gradient-image d-flex'>
                <Col className='col-md-3  align-content-center'>
                    <Row>
                        <br />
                    </Row>
                    <Row className='h1-header'>
                        <h1>Puzzle Generator</h1>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                </Col>
                <Col className='col-md-6 align-content-center overflow-auto'>
                    <h3>Puzzle Generator Description and Features</h3>
                    <p>
                        The Puzzle Generator allows you to choose the specifications of your puzzle
                        before generation. There are two dropdowns: Topic and Difficulty.
                    </p>
                    <p>
                        <b>Difficulty Requirements</b>
                        <ul>
                            <li>
                                <p><u>Easy</u>: There are 10 words between 3-5 letters associated with the chosen topic.</p>
                            </li>
                            <li>
                                <p><u>Intermediate</u>: There are 20 words between 3-10 letters associated with the chosen topic.</p>
                            </li>
                            <li>
                                <p><u>Hard</u>: There are 30 words between 3-15 letters associated with the chosen topic.</p>
                            </li>
                            <li>
                                <p><u>Expert</u>: There are 40 words between 3-15 letters associated with the chosen topic.</p>
                            </li>
                        </ul>
                    </p>
                </Col>
                <Col className='col-xxl-1'/>
                <Col className='col-md-3 col-xxl-2 align-content-center'>
                    <Row>
                        <br />
                    </Row>
                    <PGButtonRow className='pg-button-image h1-button'>
                        <MdPuzzleGeneratorButtonRouting />
                    </PGButtonRow>
                    <Row>
                        <br />
                    </Row>
                </Col>
            </Row>
            <Row className='vt-gradient-image'>
                <Col className='col-1'/>
                <Col className='col-2 align-content-center'>
                    <Row>
                        <br />
                    </Row>
                    <VTButtonRow className='vt-button-image h1-button'>
                        <MdViewTopicsRouting />
                    </VTButtonRow>
                    <Row>
                        <br />
                    </Row>
                </Col>
                <Col className='col-1'/>
                <Col className='col-3 align-content-center'>
                    <h3>View Topics Description and Features</h3>
                    <p>
                        The View Topics page allows you to view what topics and words are available in the database.
                        Click on a specific topic to view the associated words.
                    </p>
                </Col>
                <Col className='col-1'/>
                <Col className='col-4 align-content-center'>
                    <Row>
                        <br />
                    </Row>
                    <Row className='h1-header text-end'>
                        <h1>View Topics</h1>
                    </Row>
                    <Row>
                        <br />
                    </Row>
                </Col>
            </Row>
        </div>

    )

}

export default MdMainMenu;