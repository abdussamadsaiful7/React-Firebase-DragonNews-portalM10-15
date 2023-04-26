import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';


const Header = () => {
   
    return (
        <Container className='my-5'>
            <div className='text-center mt-4'>
                <img src={logo} alt='logo' />
                <p><small>Journalism Without Fear or Favour</small></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex mb-4'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger fs-5' speed={80}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>
            </div>     

        </Container>
    );
};

export default Header;