import React, { useContext, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import axios from 'axios';
import AddTaskModal from './AddTaskModal';
import Navigation from './Navigation';

const Calendar = () => {
  const [events, setEvents] = useState(null);
  const [modalShow, setModalShow] = useState(false);
  const [taskDate, setTaskDate] = useState(null);
  const { tasks, setTasks, loading, setLoading } = useContext(AppContext);

  useEffect(() => {
    const updateTasks = tasks.map(task => {
      const title = task.description;
      const date = task.dueDate;
      return { title, date };
    });
    setEvents(updateTasks);
  }, [tasks, loading, setLoading]);

  useEffect(() => {
    axios
      .get('api/tasks', { withCredentials: true })
      .then(response => {
        setTasks(response.data);
        setLoading(false);
      })
      .catch(error => console.log(error));
  }, [setTasks, loading, setLoading, taskDate, modalShow]);

  const handleDateClick = e => {
    setTaskDate(e.dateStr);
    console.log(e.dateStr);
    setModalShow(true);
  };
  return (
    <>
      <Navigation />
      <Container className='mt-2'>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          events={events}
          dateClick={handleDateClick}
        />
        <AddTaskModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          date={taskDate}
        />
      </Container>
    </>
  );
};

export default Calendar;
