import React from "react";

import './Todo.css';

const Todo = (props) => {
    return(
        <div
            className={`task${props.task.complete ? ' complete' : ''}`}
            onClick={() => {props.toggleTask(props.task.id)}}
        >
            <p>{ props.task.title }</p>
        </div>
    );
}

export default Todo;
