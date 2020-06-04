import React from 'react';

import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: ''
    }
  }

  addTask = (event, task) => {
      event.preventDefault();
      console.log(this.state);
      this.setState({tasks: [...this.state.tasks, {title: task, id: Date.now(), compete: false,}]});
  };

  toggleTask = (taskID) => {
      this.setState({
          tasks: this.state.tasks.map((task) => {
              if (task.id === taskID) {
                  return {...task, complete: !task.complete};
              }
              return task;
          })
      });
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm
            addTask={this.addTask}
        />

        <TodoList
            tasks={this.state.tasks}
            toggleTask={this.toggleTask}
        />
      </div>
    );
  }
}

export default App;
