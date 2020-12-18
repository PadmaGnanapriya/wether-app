import { Navbar, NavDropdown, Nav} from 'react-bootstrap';
import {Link} from "react-router-dom";


function Header() {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">Weather App</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link>
                            <Link to="/home">Home</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/signin">Sign in</Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to="/signup">Signup</Link>
                        </Nav.Link>

                        <NavDropdown title="Sensors" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="Temperature">Temperature</NavDropdown.Item>
                            <NavDropdown.Item href="Rain">Rain</NavDropdown.Item>
                            <NavDropdown.Item href="Wind">Wind</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Header;
