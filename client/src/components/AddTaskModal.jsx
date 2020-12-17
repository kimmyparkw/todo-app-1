// In AddTaskModel.jsx
import React, { useState, useContext } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const AddTaskModal = props => {
  const [description, setDescription] = useState(null);

  const { setLoading } = useContext(AppContext);

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post('/api/tasks', { dueDate: props.date, description });
      setLoading(false);
      props.onHide();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>Add Task</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId='formBasicDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
              type='text'
              placeholder='Enter a task'
              name='description'
              onChange={e => setDescription(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId='formBasicDueDate'>
            <Form.Label>Due Date</Form.Label>
            <Form.Control
              type='date'
              placeholder='Enter a task'
              name='dueDate'
              defaultValue={props.date}
              className='col-md-4'
            />
          </Form.Group>
          <Form.Group controlId='formBasicEmail'>
            <Button type='submit'>Add Task</Button>
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTaskModal;
