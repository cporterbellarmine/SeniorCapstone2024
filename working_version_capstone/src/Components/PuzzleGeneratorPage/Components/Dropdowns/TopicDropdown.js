// Used in /Components/PuzzleGeneratorPage/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGeneratorPage/PageDisplays/XsGeneratorPage

import React from 'react';
import Form from 'react-bootstrap/Form';

function TopicDropdown(){
    return(
        <Form.Select>
            <option>Click to choose a topic</option>
            <option value='1'>Topic Example 1</option>
            <option value='2'>Topic Example 2</option>
            <option value='3'>Topic Example 3</option>
        </Form.Select>
    );
}
export default TopicDropdown;