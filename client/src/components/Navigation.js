import React from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedOut } from '../actions/actions';
import { connect } from 'react-redux';
// const store = new AuthStore()

function Navigation(){

    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loggedIn) 
    const loggedOut = useSelector(state => state.loggedOut) 
    const signedUp = useSelector(state => state.signedUp) 


console.log('LOGIN STATE',loggedIn)
console.log('SIGNEDUP STATE',signedUp)
console.log('LOGOUT STATE',loggedOut)

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
                        signedUp ? 
                        <div></div> : 
                        <Link to='/signup'>Sign up</Link>
                    }
                    {
                        loggedIn ? 
                        <div></div> :
                        <Link to='/signin'>Sign in</Link>
                    }
                    {
                        loggedOut ? 
                        <Link 
                            to='/'
                            onClick={dispatch(setLoggedOut(false))}
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
}

export default connect()(Navigation)
