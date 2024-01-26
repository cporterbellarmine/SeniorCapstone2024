import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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