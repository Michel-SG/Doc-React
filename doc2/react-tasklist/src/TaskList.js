import React, { Component } from 'react';
import Task from './Task';
import TaskModel from './TaskModel';

export default class TaskList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tasklist: [],
        };
    }

    handleAddTask = () => {
        const newTask = new TaskModel(
            this.state.tasklist.reduce((a, x) => (a > x.id ? a : x.id), 0) + 1,
            ''
        );
        this.setState((state) => ({ tasklist: [...state.tasklist, newTask] }));
    };

    handleTitleChange = (task) => {
        this.setState((state) => ({
            tasklist: [
                ...state.tasklist.map((item) =>
                    item.id == task.id ? task : item
                ),
            ],
        }));
    };

    handleTaskDelete = (task) => {
        this.setState((state) => ({
            tasklist: [...state.tasklist.filter((item) => item.id != task.id)],
        }));
    };

    render() {
        const { tasklist } = this.state;

        return (
            <div className="tasklist">
                <button onClick={this.handleAddTask}>Ajouter une tâche</button>
                <br />
                <table>
                    <tbody>
                        {tasklist.map((task) => (
                            <tr key={task.id}>
                                <Task
                                    task={task}
                                    onTitleChange={this.handleTitleChange}
                                    onTaskDelete={this.handleTaskDelete}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
