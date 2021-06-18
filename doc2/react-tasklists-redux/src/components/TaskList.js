import React, { Component } from "react";
import TaskContainer from "../containers/TaskContainer";

export default class TaskList extends Component {
    render() {
        const { tasklist, handleEditTaskList, handleAddTask } = this.props;

        return (
            <div className="tasklist">
                <input
                    type="text"
                    value={tasklist.title}
                    onChange={(event) =>
                        handleEditTaskList(tasklist.id, event.target.value)
                    }
                />
                <button onClick={() => handleAddTask(tasklist.id)}>
                    Ajouter une tâche
                </button>
                <br />
                <table>
                    <tbody>
                        {tasklist.tasks.map((task) => (
                            <tr key={task.id}>
                                <TaskContainer
                                    listId={tasklist.id}
                                    taskId={task.id}
                                    taskTitle={task.title}
                                />
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}
