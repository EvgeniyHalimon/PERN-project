import React from 'react';
import { Container } from 'react-bootstrap';

function Welcome(){
    return(
        <Container style={{textAlign: 'center'}}>
            <h1>Welcome to our app</h1>
            <img src="https://blueehr.com/wp-content/uploads/2018/03/02.png" alt="greetings" />
        </Container>
    )
}

export default Welcome