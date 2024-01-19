import React from 'react';
import MainMenuObject from '../Components/Containers/MainMenu/MainMenuObject';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function MainPage(){
    return (
        <Container>
            <Typography component='div' style={{backgroundColor: 'aqua', padding: '1em'}}>
                <div>
                    <MainMenuObject />
                </div>
            </Typography>
        </Container>
    );
}
export default MainPage;