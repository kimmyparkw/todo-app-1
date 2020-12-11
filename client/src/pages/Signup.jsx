import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container className='container d-flex flex-column align-items-center justify-content-center fullscreen'>
      <h1>Task Manager</h1>
      <Form style={{ width: 300 }}>
        <Form.Group>
          <Form.Label htmlFor='fullName'>Full Name</Form.Label>
          <Form.Control
            id='fullName'
            type='text'
            placeholder='Full Name'
            name='name'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='email'>Email Address</Form.Label>
          <Form.Control
            id='email'
            type='email'
            placeholder='Email Address'
            name='email'
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            id='password'
            type='password'
            placeholder='Password'
            name='password'
          />
        </Form.Group>
        <Form.Group className='d-flex justify-content-center'>
          <Button type='submit'>Login</Button>
        </Form.Group>
      </Form>
      <Link classname='mt-4' to='/login'>
        Already have an account? Log in.
      </Link>
    </Container>
  );
};

export default Signup;
