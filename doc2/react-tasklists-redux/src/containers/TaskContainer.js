import { connect } from "react-redux";
import { deleteTask, editTask } from "../actions/tasklists";
import Task from "../components/Task";

const mapStateToProps = (state, props) => ({
    listId: props.listId,
    taskId: props.taskId,
    taskTitle: props.taskTitle,
});

const mapDispatchToProps = (dispatch) => ({
    handleEditTask: (listId, id, title) =>
        dispatch(editTask(listId, id, title)),
    handleDeleteTask: (listId, id) => dispatch(deleteTask(listId, id)),
});

const TaskContainer = connect(mapStateToProps, mapDispatchToProps)(Task);

export default TaskContainer;
