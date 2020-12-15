import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const DeleteButton = ({ id }) => {
  const { setLoading } = useContext(AppContext);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await axios({
        method: 'DELETE',
        url: `/api/tasks/${id}`,
        withCredentials: true,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return <Button onClick={handleDelete}>Delete</Button>;
};

export default DeleteButton;
