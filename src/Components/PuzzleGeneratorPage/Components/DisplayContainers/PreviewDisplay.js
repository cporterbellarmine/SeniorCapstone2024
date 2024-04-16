// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdPreviewContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React, {useEffect, useState} from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { PreviewContainerRow } from './PreviewStyledComponents';

const PreviewDisplay = ({ puzzle }) => {

    if(puzzle.length > 1){
        return(
            <Container>
                <Col>
                    <Row>
                        <h2>Generated Puzzle</h2>
                    </Row>
                    <PreviewContainerRow className='m-2 p-2'>
                        <h3>{puzzle.length} words to place:</h3>
                       {puzzle.map(word => {
                            return(<p>{word}</p>)
                        })}
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