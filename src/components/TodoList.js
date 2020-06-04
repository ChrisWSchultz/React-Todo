import React from "react";

import Todo from "./Todo";


const TodoList = (props) => {
    if (props.tasks.length > 0) {
        return (
            <div>
                {props.tasks.map((task) => {
                    return (
                        <Todo key={task.id} task={task} toggleTask={props.toggleTask}/>
                    );
                })}
            </div>
        );
    } else {
        return (
            <div>
                Add Some Tasks
            </div>
        );
    }
}

export default TodoList;
