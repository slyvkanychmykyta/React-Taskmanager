import React, {Component} from 'react';
import './App.css';
import InputField from '../InputField/InputField';
import TaskList from '../TaskList/TaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          description: `Create first React project`,
          isDone: false
        },
        {
          description: `Get something to eat`,
          isDone: false
        },
        {
          description: `Dont waste time`,
          isDone: false
        },
      ],
      input: ``
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
    this.handleDoneTask = this.handleDoneTask.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
  }

  componentDidMount() {
    if (localStorage.tasks) {
      this.setState({
        tasks: JSON.parse(localStorage.tasks)
      });
      return;
    }
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  updateInput(value) {
    this.setState({
      input: value
    })
  }

  handleAddTask() {
    if (!this.state.input || this.state.input === ``) return;
    this.setState((previousState) => {
      return {
        tasks: previousState.tasks.concat([{
          description: previousState.input,
          isDone: false
        }]),
        input: ``
      }
    })
  }

  handleEnterKey(e) {
    if (e.key === `Enter`)  this.handleAddTask();
  }

  handleRemoveTask (name) {
    this.setState((previousState) => {
      return {
        tasks: previousState.tasks.filter((task) => task.description !== name)
      }
    })
  }

  handleDoneTask(name) {
    this.setState((previousState) => {
      const taskToMove = previousState.tasks.find((task) => task.description === name);
      return {
        tasks: previousState.tasks
            .filter((task) => task.description !== taskToMove.description)
            .concat([{
              description: name,
              isDone: true
            }])
      }
    })
  }

  render() {
    return (
        <div className="App">
          <div className="container">
            <h1 className="App-header">TaskManager</h1>
            <InputField
                onHandleEnterKey = {this.handleEnterKey}
                onChangeField={this.updateInput}
                onHandleAddTask={this.handleAddTask}
                fieldValue={this.state.input}
            />
            <TaskList
                tasks={this.state.tasks}
                onRemoveTask={this.handleRemoveTask}
                onDoneTask={this.handleDoneTask}/>
          </div>
        </div>
    );
  }
}

export default App;
