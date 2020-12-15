import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { AppContext } from '../context/AppContext';
import dueFilter from '../helpers/DueFilter';

const DateFilters = () => {
  const { tasks, setFilteredTasks, currentFilter } = useContext(AppContext);

  const filters = ['Due Soon', 'Due Later', 'Past Due', 'Not Due', 'All'];

  const filterByDate = query => {
    dueFilter(query, tasks, setFilteredTasks);
  };

  const filterClass = filter => {
    let className = '';
    switch (filter) {
      case 'Due Soon':
        className = `badge badge-warning`;
        break;
      case 'Due Later':
        className = `badge badge-success`;
        break;
      case 'Past Due':
        className = `badge badge-danger`;
        break;
      case 'Not Due':
        className = `badge badge-secondary`;
        break;
      case 'All':
        className = `badge badge-dark`;
        break;
      default:
        className = 'badge';
    }
    return className;
  };

  return (
    <Container>
      <ul>
        {filters.map((filter, index) => (
          <li
            key={index}
            className={`${filterClass(filter)}`}
            onClick={() => filterByDate(filter)}
          >
            {filter}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default DateFilters;
