import React from 'react';
import moment from 'moment';
import DeleteButton from './DeleteButton';

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
          <td>
            <DeleteButton id={task._id} />
          </td>
        </tr>
      ))}
    </>
  );
};
export default Task;
