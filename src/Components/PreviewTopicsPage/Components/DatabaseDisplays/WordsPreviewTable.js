// Used in /Components/PreviewTopicsPage/PageDisplays/MdPreviewTopicsContainer
// Used in /Components/PreviewTopicsPage/PageDisplays/XsPreviewTopicsContainer

import React from 'react';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import { WordsParentContainer } from '../../PreviewTopicsCompStyling';
import './list_group.css';

function WordsPreviewTable(){
    return(
        <WordsParentContainer>
            <Row>
                <h2>Word Preview</h2>
            </Row>
            <Row>
                <ListGroup variant='flush' className='p-0 overflow-y-scroll list_group-height'>
                    <ListGroup.Item action>Word 1</ListGroup.Item>
                    <ListGroup.Item action>Word 2</ListGroup.Item>
                    <ListGroup.Item action>Word 3</ListGroup.Item>
                    <ListGroup.Item action>Word 1</ListGroup.Item>
                    <ListGroup.Item action>Word 2</ListGroup.Item>
                    <ListGroup.Item action>Word 3</ListGroup.Item>
                    <ListGroup.Item action>Word 1</ListGroup.Item>
                    <ListGroup.Item action>Word 2</ListGroup.Item>
                    <ListGroup.Item action>Word 3</ListGroup.Item>
                </ListGroup>
            </Row>
        </WordsParentContainer>
        
    );
};
export default WordsPreviewTable;