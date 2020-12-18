import { Navbar, NavDropdown, Nav } from 'react-bootstrap';

function Home() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Home</Nav.Link>
                        <Nav.Link href="#pricing">Sign in</Nav.Link>
                        <Nav.Link href="#pricing">Signup</Nav.Link>
                        <NavDropdown title="Sensors" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Temperature</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Rain</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Wind</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Home;
