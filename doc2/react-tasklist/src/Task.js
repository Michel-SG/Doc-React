import React from 'react';

export default function Task(props) {
    const { task, onTitleChange, onTaskDelete } = props;

    return (
        <>
            <td>
                <input
                    type="text"
                    value={task.title}
                    onChange={(event) => {
                        const editedTask = {
                            ...task,
                            title: event.target.value,
                        };
                        onTitleChange(editedTask);
                    }}
                />
            </td>
            <td>
                <span
                    onClick={() => onTaskDelete(task)}
                    style={{ cursor: 'pointer' }}
                >
                    x
                </span>
            </td>
        </>
    );
}
