import React from 'react';
import moment from 'moment';

const Task = ({ tasks }) => {
  return (
    <>
      {tasks.map(task => (
        <tr key={task._id}>
          <td>
            {task.completed ? (
              <strike>{task.description}</strike>
            ) : (
              task.description
            )}
          </td>
          <td>
            {task.dueDate
              ? moment(task.dueDate).format('MMM Do, YYYY')
              : 'No Due Date.'}
          </td>
          <td>{/* ...pending logic */}</td>
        </tr>
      ))}
    </>
  );
};
export default Task;
