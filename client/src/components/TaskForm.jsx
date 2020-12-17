import React, { useState, useContext } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';
const TaskForm = () => {
  const [taskData, setTaskData] = useState(null);

  const { setLoading } = useContext(AppContext);

  const handleChange = e => {
    setTaskData({ ...taskData, [e.target.name]: e.target.value });
  };

  const handleTaskSubmission = async e => {
    const form = e.target;
    setLoading(true);
    e.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: '/api/tasks',
        withCredentials: true,
        data: taskData,
      });
      swal('New task!', 'Your task has been added', 'success');
      setTaskData(null);
      setLoading(false);
      form.reset();
    } catch (error) {
      swal('Oops', 'Something went wrong');
    }
  };

  return (
    <Container>
      <Form onSubmit={handleTaskSubmission}>
        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            type='text'
            placeholder='Enter a task'
            name='description'
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Group controlId='formBasicDueDate'>
          <Form.Label>Due Date</Form.Label>
          <Form.Control
            type='date'
            placeholder='Enter a task'
            name='dueDate'
            onChange={handleChange}
            className='col-md-4'
          />
        </Form.Group>
        <Form.Group controlId='formBasicEmail'>
          <Button type='submit'>Add Task</Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default TaskForm;
