// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { PreviewContainerRow, WordSearchDisplay, WordSearchDisplayCon } from './PreviewStyledComponents';

const PreviewDisplay = ({ puzzle }) => {

    console.log(puzzle);
    if(puzzle.length > 1){
        return(
            <Container>
                <Col>
                    <Row>
                        <h2>Generated Puzzle</h2>
                    </Row>
                    <PreviewContainerRow size='sm' className='m-2 p-2'>
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
                            {puzzle.map(row => {
                                return(<tr className='p-0'>
                                    {row.map(letter => {
                                        return(<td className='text-center p-3'>{letter.toUpperCase()}</td>)
                                    })}
                                </tr>)
                            })}
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