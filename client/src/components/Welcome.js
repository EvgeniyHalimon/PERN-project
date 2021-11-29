import React from 'react';
import { Container } from 'react-bootstrap';

function Welcome(){
    return(
        <Container style={{textAlign: 'center'}}>
            <h1>Welcome to our app</h1>
            <img src="https://lh3.googleusercontent.com/proxy/iqoTzaEHtiWUPjxEruxLZrQ8Gx0VGgFJRS55Ydm3n64YnGDku952JQ-d3BmR3iUKseXieVCDadXYWddE" alt="greetings" />
        </Container>
    )
}

export default Welcome