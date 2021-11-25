import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormComponent from './components/SignUp';
import {Navbar, Nav, Container} from 'react-bootstrap'

function App() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">PERN baby, PERN</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">

          </Nav>
          <Nav>
            <Nav.Link href="#deets">Sign up</Nav.Link>
            <Nav.Link href="#memes">
              Sign in
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default App;
