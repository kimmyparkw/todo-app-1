import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import swal from 'sweetalert';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    try {
      const response = await axios.get(`/api/users/password?email=${email}`);
      swal('Email sent.', 'Check your email to reset password.');
      form.reset();
    } catch (error) {
      swal('Oops', 'Something went wrong');
    }
  };

  return (
    <>
      <Container className='container d-flex flex-column align-items-center justify-content-center fullscreen'>
        <h1 className='mb-4'>Reset Password</h1>
        <Form style={{ width: 300 }} onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicEmail'>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type='email'
              placeholder='Enter email'
              name='email'
              onChange={e => setEmail(e.target.value)}
              required
              autoComplete='off'
            ></Form.Control>
          </Form.Group>
          <Form.Group>
            <Button type='submit' variant='danger'>
              Reset Password
            </Button>
          </Form.Group>
        </Form>
      </Container>
    </>
  );
};

export default ForgotPassword;
