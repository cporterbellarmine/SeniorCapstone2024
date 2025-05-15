// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from 'react-bootstrap/Table';
import { PreviewContainerRow, WordSearchDisplay, WordSearchDisplayCon, WordsSize, ColoredTabs } from './PreviewStyledComponents';

const PreviewDisplay = ({ puzzle, topic, puzzleWords, answerKey }) => {

    console.log(puzzleWords);

    if(puzzle.length > 1){
        return(
            <ColoredTabs defaultActiveKey='puzzle'>
                <Tab eventKey="puzzle" title="Generated Puzzle">
                    <Container>
                        <Col>
                            <Row>
                                <h2>Generated Puzzle</h2>
                            </Row>
                            <PreviewContainerRow className='m-2 p-2 overflow-scroll'>
                                <WordSearchDisplayCon>
                                    <Row className='text-center'>
                                        <h1>{topic}</h1>
                                    </Row>
                                    <WordSearchDisplay className='table-borderless'>
                                        <tbody>
                                            {puzzle.map((row, index) => {
                                                return(<tr className='p-0' key={index}>
                                                {row.map((letter, index) => {
                                                    return(<td className='text-center p-2' key={index}>{letter.toUpperCase()}</td>)
                                                })}
                                            </tr>)
                                            })}
                                        </tbody>
                                    </WordSearchDisplay>
                                    <Row className='text-center'>
                                        <h3 className='mb-3'>Word List</h3>
                                    </Row>
                                    <Row>
                                        {puzzleWords.map((word, index) => {
                                            return(<Col className='col-3' key={index}><WordsSize>{word.toUpperCase()}</WordsSize></Col>)
                                        })}
                                    </Row>
                                </WordSearchDisplayCon>
                            
                            </PreviewContainerRow>
                        </Col>
                    </Container>
                </Tab>
                <Tab eventKey="answerKey" title="Answer Key">
                    <Container>
                        <Col>
                            <Row>
                                <h2>Generated Answer Key</h2>
                            </Row>
                            <PreviewContainerRow className='m-2 p-2 overflow-scroll'>
                            
                                <WordSearchDisplayCon>
                                    <Row className='text-center'>
                                        <h1>{topic}</h1>
                                    </Row>
                                    <WordSearchDisplay className='table-borderless'>
                                        <tbody>
                                            {answerKey.map((row, index) => {
                                                return(<tr className='p-0' key={index}>
                                                {row.map((letter, index) => {
                                                    return(<td className='text-center p-2' key={index}>{letter.toUpperCase()}</td>)
                                                })}
                                            </tr>)
                                            })}
                                        </tbody>
                                    </WordSearchDisplay>
                                    <Row className='text-center'>
                                        <h3 className='mb-3'>Word List</h3>
                                    </Row>
                                    <Row>
                                        {puzzleWords.map((word, index) => {
                                            return(<Col className='col-3' key={index}><WordsSize>{word.toUpperCase()}</WordsSize></Col>)
                                        })}
                                    </Row>
                                </WordSearchDisplayCon>
                            
                            </PreviewContainerRow>
                        </Col>
                    </Container>
                </Tab>
            </ColoredTabs>
        )
    }else{
        return(
            <Container>
                <Col>
                    <Row>
                        <h2>Generated Puzzle</h2>
                    </Row>
                    <PreviewContainerRow className='m-2 p-3'>
                       {<h3>{puzzle}</h3>}
                    </PreviewContainerRow>
                </Col>
            </Container>
        );
    };
};
export default PreviewDisplay;