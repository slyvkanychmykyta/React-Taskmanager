import React from 'react';
import './InputField.css';

const InputField = ({fieldValue, onHandleAddTask, onHandleEnterKey, onChangeField}) => {

    const handleChange = (e) => {
        onChangeField(e.target.value);
    };

    return (<div className="add-task">
        <input className="add-task__input" type="text" value={fieldValue} onKeyDown={onHandleEnterKey} onChange={handleChange}/>
        <button className="add-task__button" onClick={onHandleAddTask} type="button">Add new Task</button>
    </div>)
};

export default InputField;
