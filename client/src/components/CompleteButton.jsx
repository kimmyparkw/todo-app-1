import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import swal from 'sweetalert';

const CompleteTask = ({ task }) => {
  const { setLoading } = useContext(AppContext);
  const toggleComplete = async () => {
    setLoading(true);
    try {
      await axios({
        method: 'PATCH',
        url: `/api/tasks/${task._id}`,
        withCredentials: true,
        data: { completed: !task.completed },
      });
      swal('Updated', 'Your task has been updated', 'success');
      setLoading(false);
    } catch (error) {
      swal(`Oops!`, 'Something went wrong.');
    }
  };

  return (
    <Button
      onClick={toggleComplete}
      variant={task.completed ? 'secondary' : 'success'}
    >
      {task.completed ? 'Mark Incomplete' : 'Mark Complete'}
    </Button>
  );
};

export default CompleteTask;
