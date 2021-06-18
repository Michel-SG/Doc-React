import {
    ADD_TASKLIST,
    EDIT_TASKLIST,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from "../constants/tasklists";

const initialState = {
    tasklists: [],
};

export default function tasklistsReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TASKLIST: {
            return {
                tasklists: [
                    ...state.tasklists,
                    {
                        id:
                            state.tasklists.reduce(
                                (a, x) => (a > x.id ? a : x.id),
                                0
                            ) + 1,
                        title: "Nouvelle liste",
                        tasks: [],
                    },
                ],
            };
        }
        case EDIT_TASKLIST: {
            const { id, title } = action.payload;
            return {
                tasklists: state.tasklists.map((tasklist) => {
                    const tasklistEdit = { ...tasklist };
                    if (tasklistEdit.id == id) {
                        tasklistEdit.title = title;
                    }
                    return tasklistEdit;
                }),
            };
        }
        case ADD_TASK: {
            const { listId } = action.payload;
            return {
                tasklists: state.tasklists.map((tasklist) => {
                    const tasklistEdit = { ...tasklist };
                    if (tasklistEdit.id == listId) {
                        const newId =
                            tasklistEdit.tasks.reduce(
                                (a, x) => (a > x.id ? a : x.id),
                                0
                            ) + 1;
                        tasklistEdit.tasks = [
                            ...tasklistEdit.tasks,
                            { id: newId, title: "" },
                        ];
                    }
                    return tasklistEdit;
                }),
            };
        }
        case EDIT_TASK: {
            const { listId, id, title } = action.payload;
            return {
                tasklists: state.tasklists.map((tasklist) => {
                    const tasklistEdit = { ...tasklist };
                    if (tasklistEdit.id == listId) {
                        tasklistEdit.tasks = tasklistEdit.tasks.map((task) => {
                            if (task.id == id) {
                                task.title = title;
                            }
                            return task;
                        });
                    }
                    return tasklistEdit;
                }),
            };
        }
        case DELETE_TASK: {
            const { listId, id } = action.payload;
            return {
                tasklists: state.tasklists.map((tasklist) => {
                    const tasklistEdit = { ...tasklist };
                    if (tasklistEdit.id == listId) {
                        tasklistEdit.tasks = tasklistEdit.tasks.filter(
                            (task) => task.id != id
                        );
                    }
                    return tasklistEdit;
                }),
            };
        }
        default:
            return state;
    }
}
