import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Container, Nav, Button} from 'react-bootstrap'

function Navigation(){
    return(
        <Navbar expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">
                    PERN baby, PERN
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                </Nav>
                <Nav style={{alignItems: 'center'}}>
                    <Link to='/signup'>Sign up</Link>
                    <Link to='/signin'>Sign in</Link>
                    <Link to='/'>Logout</Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default Navigation