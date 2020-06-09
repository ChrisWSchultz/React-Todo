import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            task: ''
        }
    }

    addTask = (event) => {
        event.preventDefault();
        this.props.addTask(event, this.state.task);
        this.setState({item: ''});
    };

    handleChanges = (event) => {
        event.preventDefault();
        this.setState({[event.target.name]: event.target.value});
    };

    render() {
        return(
            <div>
                <form>
                    <input
                        type="text"
                        value={ this.state.task }
                        name="task"
                        onChange={ this.handleChanges }
                    />
                    <button onClick={ this.addTask }>Add Task</button>
                    <button onClick={ this.props.removeCompleted }>Remove Completed</button>
                </form>
            </div>
        );
    }
}

export default TodoForm
