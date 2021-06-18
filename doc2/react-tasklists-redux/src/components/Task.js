import React, { Component } from "react";

export default class Task extends Component {
    render() {
        const {
            listId,
            taskId,
            taskTitle,
            handleEditTask,
            handleDeleteTask,
        } = this.props;
        return (
            <>
                <td>
                    <input
                        type="text"
                        value={taskTitle}
                        onChange={(event) =>
                            handleEditTask(listId, taskId, event.target.value)
                        }
                    />
                </td>
                <td>
                    <span
                        onClick={() => handleDeleteTask(listId, taskId)}
                        style={{ cursor: "pointer" }}
                    >
                        x
                    </span>
                </td>
            </>
        );
    }
}
