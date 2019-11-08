import React from 'react';
import './TaskList.css';

const TaskList = ({onRemoveTask, onDoneTask, tasks}) => {
    return (<ul className="d-flex flex-wrap">
        {tasks.map(({description, isDone}, index) => {
            return (
                <li className={`${isDone ? `task--done` : ``} task`} key={index}>
                    <p className="task__name">{description}</p>
                    <button className="task__ctrl-btn task__ctrl-btn--remove" onClick={() => onRemoveTask(description)}
                            type="button">Delete
                    </button>
                    {!isDone &&
                    <button className="task__ctrl-btn task__ctrl-btn--done" onClick={() => onDoneTask(description)}
                            type="button">Mark as done</button>}
                </li>)
        })}
    </ul>)
};

export default TaskList;
