import React, { useContext } from 'react';
import { Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
import { useState } from 'react';

const Register = () => {
    const {createUser} = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister= (event)=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(name, photo, email, password)
        .then(result=>{
            const createdUser = result.user;
            console.log(createdUser)
        })
        .catch(error =>{
            console.log(error)
        })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked)
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3>Please register your Account!</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Photo URL" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check 
                onClick = {handleAccepted}
                type="checkbox" 
                name='accept' 
                label={<>Accept <Link to='/terms'> terms and conditions</Link></>} />
            </Form.Group>
                <button disabled={!accepted} className='btn btn-primary' variant="primary" type="submit">
                    Register
                </button>
                <br />
                <Form.Text className="">
                    Already have an Account ? <Link to='/login'>Login</Link>
                </Form.Text>
                <br />
                <Form.Text className="text-success">
                    We'll never share your email with anyone else.
                </Form.Text>
                <br />
                <Form.Text className="text-danger">
                    We'll never share your email with anyone else.
                </Form.Text>

            </Form>
        </Container>
    );
};

export default Register;