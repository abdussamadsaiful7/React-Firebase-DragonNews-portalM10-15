import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub, FaGoogle,FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import QZone from '../Qzone/QZone';
import bg from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div className='text-start px-auto'>
            <h5>Login With</h5>
            <Button className='my-2' variant="outline-primary"> <span className='me-2'><FaGoogle /></span> Login With Google</Button>
            <Button variant="outline-secondary"> <span className='me-2'><FaGithub /></span> Login With Github</Button>
            <div className='my-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><FaFacebook className='me-3 text-primary'/>Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter className='me-3 text-primary'/>Twitter</ListGroup.Item>
                    <ListGroup.Item>< FaInstagram className='me-3 text-danger'/>Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone/>
            <div className='mt-3 position-relative'>
                <img src={bg} alt='pic'/>
                <div className='position-absolute top-0  text-white my-5 text-center'>
                    <h2>Create an Amazing Newspaper</h2>
                    <p className='px-4 py-4 fs-5'>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
                    <Button className='btn btn-danger'>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default RightNav;