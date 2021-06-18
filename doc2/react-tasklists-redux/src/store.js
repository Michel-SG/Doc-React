import { createStore } from "redux";
import tasklistsReducer from "./reducers/tasklists";

export const store = createStore(
    tasklistsReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
