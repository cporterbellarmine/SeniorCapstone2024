import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { WordsParentContainer } from '../../PreviewTopicsCompStyling';

function WordsPreviewTable(){
    return(
        <WordsParentContainer>
            <Row>
                <h2>Word Preview</h2>
            </Row>
            <Row>
                <Table bordered>
                    <tbody>
                        <tr>
                            <td>
                                Word 1
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Word 2
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Word 3
                            </td>
                        </tr>
                    </tbody>
                </Table>
            </Row>
        </WordsParentContainer>
        
    );
};
export default WordsPreviewTable;