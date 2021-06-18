import {
    ADD_TASKLIST,
    EDIT_TASKLIST,
    ADD_TASK,
    EDIT_TASK,
    DELETE_TASK,
} from "../constants/tasklists";

export const addTasklist = () => ({ type: ADD_TASKLIST });
export const editTasklist = (id, title) => ({
    type: EDIT_TASKLIST,
    payload: { id, title },
});
export const addTask = (listId) => ({
    type: ADD_TASK,
    payload: { listId },
});
export const editTask = (listId, id, title) => ({
    type: EDIT_TASK,
    payload: { listId, id, title },
});
export const deleteTask = (listId, id) => ({
    type: DELETE_TASK,
    payload: { listId, id },
});
