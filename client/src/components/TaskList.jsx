import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';

const TaskList = () => {
  const {
    setTasks,
    search,
    filteredTasks,
    setFilteredTasks,
    loading,
  } = useContext(AppContext);

  useEffect(() => {
    axios
      .get('/api/tasks?sortBy=dueDate:desc', { withCredentials: true })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Due</th>
            <th>Completed</th>
          </tr>
        </thead>
        <tbody></tbody>
      </Table>
    </Container>
  );
};

export default TaskList;
