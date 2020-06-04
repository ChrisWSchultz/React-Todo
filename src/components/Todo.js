import React from "react";


const Todo = (props) => {
    return(
        <div
            className={`item${props.task.complete} ' completed' : ''`}
            onClick={() => {props.toggleTask(props.task.id)}}
        >
            <p>{ props.task.title }</p>
        </div>
    );
}

export default Todo;
