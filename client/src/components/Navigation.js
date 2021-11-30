import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import {Navbar, Container, Nav } from 'react-bootstrap'
import { useSelector, useDispatch } from 'react-redux';
import { connect } from 'react-redux';
import { setLoggedIn } from '../actions/actions';



function Navigation(){

    const dispatch = useDispatch()
    const loggedIn = useSelector(state => state.loggedIn) 
    const loggedOut = useSelector(state => state.loggedOut) 
    const storedToken = localStorage.getItem('token')
    const [token, setToken] = useState(storedToken)

    useEffect(() => {
        console.log('nav',token)
        localStorage.setItem('token', token)
    }, [token]);

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
                        token ?
                        <Link 
                            to='/'
                            onClick={
                                () => setToken("")
                            }
                        >
                            Logout
                        </Link> : 
                        <div>
                            <Link to='/signup'>Sign up</Link>
                            <Link to='/signin'>Sign in</Link>
                        </div> 
                        
                    }
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default connect()(Navigation)
