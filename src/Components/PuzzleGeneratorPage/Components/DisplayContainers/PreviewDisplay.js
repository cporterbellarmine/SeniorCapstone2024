// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { PreviewContainerRow, WordSearchDisplay, WordSearchDisplayCon, WordsSize } from './PreviewStyledComponents';

const PreviewDisplay = ({ puzzle, topic, puzzleWords }) => {

    console.log(puzzleWords);

    //const [topicTitle, setTopicTitle] = useState('');

    // useEffect(() => {

    //     const topicReturn = () => {
    //         if(!topic){
    //             return;
    //         }

    //         for(let i = 0; i < topic.length; i++){
    //             const letter = topic[i];
    //             if(i = 0){
    //                 letter = topic[i].toUpperCase();
    //             }
    //             setTopicTitle([...topicTitle, letter]);
    //         }
    //     }

    //     topicReturn();

    // }, [topic]);

    //console.log(topicTitle);
        


    if(puzzle.length > 1){
        return(
            <Container>
                <Col>
                    <Row>
                        <h2>Generated Puzzle</h2>
                    </Row>
                    <PreviewContainerRow className='m-2 p-2 overflow-scroll'>
                        {/* <WordSearchDisplayCon>
                            {puzzle.map(row => {
                                return(<Row className='justify-content-center'>
                                    {row.map(letter => {
                                        return(<Col className='text-center col-1 p-3 w-auto'>{letter.toUpperCase()}</Col>)
                                    })}
                                </Row>)
                            })}
                        </WordSearchDisplayCon> */}

                        <WordSearchDisplay className='table-borderless'>
                            <Row className='text-center'>
                                <h1>{topic}</h1>
                            </Row>
                            <Table>
                                {puzzle.map(row => {
                                return(<tr className='p-0'>
                                    {row.map(letter => {
                                        return(<td className='text-center p-2'>{letter.toUpperCase()}</td>)
                                    })}
                                </tr>)
                                })}
                            </Table>
                            <Row className='text-center'>
                                <h3 className='mb-3'>Word List</h3>
                            </Row>
                            <Row>
                                {puzzleWords.map(word => {
                                    return(<Col className='col-3'><WordsSize>{word.toUpperCase()}</WordsSize></Col>)
                                })}
                            </Row>
                            
                        </WordSearchDisplay>
                       
                    </PreviewContainerRow>
                </Col>
            </Container>
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