import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Container, Nav } from 'react-bootstrap'
import {observer} from 'mobx-react-lite'
import AuthStore from '../store/AuthStore';

const store = new AuthStore()
console.log("LOG",store.loggenIn)
console.log("SIGN",store.signedUp)

export const Navigation = observer(() => {
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
                    {
                        store.signedUp ? 
                        <div></div> : 
                        <Link to='/signup'>Sign up</Link>
                    }
                    {
                        store.loggenIn ? 
                        <div></div> :
                        <Link to='/signin'>Sign in</Link>
                    }
                    {
                        store.loggedOut ? 
                        <Link 
                        to='/'
                        onClick={
                            () => store.setLoggedOut(false),
                            () => store.setLoggedIn(false)
                        }
                        >
                            Logout
                        </Link> :
                        <div></div>
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
})
