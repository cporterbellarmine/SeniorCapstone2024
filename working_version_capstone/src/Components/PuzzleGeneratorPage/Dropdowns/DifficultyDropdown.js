// Used in /Components/PuzzleGenerator/PageDisplays/MdOptionsContainer
// Used in /Components/PuzzleGenerator/PageDisplays/XsGeneratorPage

import React from 'react';
import Form from 'react-bootstrap/Form';

function DifficultyDropdown(){
    return(
        <Form.Select>
            <option>Click to choose a difficulty</option>
            <option value='1'>Easy</option>
            <option value='2'>Intermediate</option>
            <option value='3'>Hard</option>
            <option value='4'>Expert</option>
        </Form.Select>
    );
}
export default DifficultyDropdown;