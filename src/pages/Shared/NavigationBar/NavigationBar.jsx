import React from 'react';
import { Button, Container, Image, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useContext } from 'react';
import samad from '../../../assets/samad.jpg'

const NavigationBar = () => {
    const {user} = useContext(AuthContext);
    return (
        <Container className='my-4 mb-5'>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link href='/'>Home</Nav.Link>
                            <Nav.Link href="/about">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                            <NavDropdown title="" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link href="#deets"> <Image style={{ width: "45px", height: "45px" }} src={samad} roundedCircle /> </Nav.Link>
                            {user &&
                                <Nav.Link href="#deets"> <FaUserCircle style={{ fontSize: '35px' }} /> </Nav.Link>
                            }
                           
                                {user ?
                                    <Button variant="secondary">Logout</Button> :
                                    <Link to='/login'> <Button variant="secondary">Login</Button></Link>
                                }
                           
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;