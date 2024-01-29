import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { InstructionsRowMdStyled } from '../SizedOptionsStyles';

const InstructionsRowMd = () => {
    return(
        <InstructionsRowMdStyled className='p-3'>
            <Col>
                <Row>
                    <h2>Instructions</h2>
                </Row>
                <Row>
                    <div>
                        <ol>
                            <li>
                                <p>Step 1</p>
                            </li>
                            <li>
                                <p>Step 2</p>
                            </li>
                            <li>
                                <p>Step 3</p>
                            </li>
                        </ol>
                    </div>
                    
                </Row>
            </Col>
        </InstructionsRowMdStyled>
    );
};
export default InstructionsRowMd;