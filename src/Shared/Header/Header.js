import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import logo from '../../images/logo2.png'

const Header = () => {
    return (
        <Navbar className='my-1'>
            <Container>
                <Navbar.Brand href="#home">
                    <img style={{ height: '35px' }} src={logo} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div className='d-flex align-items-center'>
                            <FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon>
                            <button className='btn bg-none fw-bold mx-3'>Login</button>
                            <button style={{ borderRadius: '18px' }} className="btn bg-danger text-light px-4">Sing Up</button>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;