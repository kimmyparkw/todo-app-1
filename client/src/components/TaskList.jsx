import React, { useEffect, useContext } from 'react';
import { Container, Table } from 'react-bootstrap';
import axios from 'axios';
import { AppContext } from '../context/AppContext';
import Task from './Task';

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
      .get('/api/tasks?sortBy=dueDate:asc', { withCredentials: true })
      .then(response => {
        setTasks(response.data);
        setFilteredTasks(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [setTasks, setFilteredTasks, search, loading]);

  return (
    <Container>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Due</th>
            <th>Options</th>
          </tr>
        </thead>
        <tbody>
          <Task tasks={filteredTasks} />
        </tbody>
      </Table>
    </Container>
  );
};

export default TaskList;
