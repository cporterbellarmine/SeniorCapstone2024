// Used in /src/Pages/HomePage

import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ButtonNavRouting from './ButtonNavRouting';

const MenuContainer = () => {
    return(
        <Col>
            <Row>
                <h1>Menu</h1>
            </Row>
            <Row>
                <ButtonNavRouting />
            </Row>
        </Col>
    );
}
export default MenuContainer;