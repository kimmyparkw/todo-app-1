import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';

const UpdatePassword = ({ history }) => {
  const [password, setPassword] = useState(null);

  const handleChange = e => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (password.password !== password.confirmPassword) {
      throw Error('Error', 'Oops, passwords must match.');
    }

    try {
      await axios.put(
        '/api/users/password',
        { password: password.password },
        { withCredentials: true }
      );
      history.push('/login');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container className='container d-flex flex-column align-items-center justify-content-center fullscreen'>
      <h1 className='mb-4'>Update Password</h1>
      <Form style={{ width: 300 }} onSubmit={handleSubmit}>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>New Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter new password'
            name='password'
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </Form.Group>
        <Form.Group controlId='formBasicPassword'>
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type='password'
            placeholder='Enter new password'
            name='confirmPassword'
            onChange={handleChange}
            required
            autoComplete='off'
          />
        </Form.Group>
        <Form.Group className='d-flex justify-content-center'>
          <Button variant='primary' type='submit'>
            Update Password
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default UpdatePassword;
