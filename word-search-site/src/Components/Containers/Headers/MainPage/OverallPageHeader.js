import React from 'react';
import './OverallPageHeader.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import NavRouter from '../../../Individual/NavBar/NavRouter';


function OverallPageHeader(){
    return (
        <Container>
            <Typography component='div' style={{backgroundColor: 'deeppink'}}>
                <h4>Header Container</h4>
                <div className='OverallPageHeader-title'>
                    <h1>Word Search Puzzle Generator</h1>
                </div>
                <h4>Nav Menu Router</h4>
                <NavRouter />
            </Typography>
        </Container>
    );
}

export default OverallPageHeader;