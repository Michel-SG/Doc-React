import React, { Component } from "react";
import "./App.css";
import TaskListContainer from "../containers/TaskListContainer";

export default class App extends Component {
    render() {
        const { tasklists, handleAddTaskList } = this.props;

        return (
            <div className="App">
                <button onClick={handleAddTaskList}>Ajouter une liste</button>
                <hr />
                <div>
                    {tasklists.map((tasklist) => (
                        <TaskListContainer
                            key={tasklist.id}
                            listId={tasklist.id}
                        />
                    ))}
                </div>
            </div>
        );
    }
}
