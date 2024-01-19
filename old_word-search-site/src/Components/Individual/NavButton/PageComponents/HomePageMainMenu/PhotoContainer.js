import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';

function PhotoContainer(){
    return(
        <Container>
            <Typography component='div' style={{backgroundColor: 'darkred', padding:'1em'}}>
               <h3>Example Photo Goes Here</h3>
            </Typography>
        </Container>
    );
}
export default PhotoContainer;