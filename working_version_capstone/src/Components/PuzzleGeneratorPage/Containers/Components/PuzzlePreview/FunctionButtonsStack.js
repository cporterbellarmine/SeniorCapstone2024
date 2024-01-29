import React from 'react';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';


const FunctionButtonStack = () => {
    return(
        <Row className='order-3 py-4'>
            <Stack gap={2}>
                <TopicDropdown />
                <DifficultyDropdown />
            </Stack>
        </Row>
    );
};
export default FunctionButtonStack;