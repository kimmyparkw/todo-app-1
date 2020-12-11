import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState(null);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container className='container d-flex flex-column align-items-center justify-content-center fullscreen'>
      <h1>Task Manager</h1>
      <Form style={{ width: 300 }}>
        <Form.Group>
          <Form.Label htmlFor='email'>Email Address</Form.Label>
          <Form.Control
            id='email'
            type='email'
            placeholder='Email Address'
            name='email'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label htmlFor='password'>Password</Form.Label>
          <Form.Control
            id='password'
            type='password'
            placeholder='Password'
            name='password'
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className='d-flex justify-content-center'>
          <Button type='submit'>Login</Button>
        </Form.Group>
      </Form>
      <Link className='mt-4' to='/signup'>
        Need an account? Sign up.
      </Link>
    </Container>
  );
};

export default Login;
