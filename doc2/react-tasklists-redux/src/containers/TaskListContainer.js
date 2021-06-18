import { connect } from "react-redux";
import { editTasklist, addTask } from "../actions/tasklists";
import TaskList from "../components/TaskList";

const mapStateToProps = (state, props) => ({
    tasklist: state.tasklists.find((tasklist) => tasklist.id == props.listId),
});

const mapDispatchToProps = (dispatch) => ({
    handleEditTaskList: (listId, title) =>
        dispatch(editTasklist(listId, title)),
    handleAddTask: (listId) => dispatch(addTask(listId)),
});

const TaskListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);

export default TaskListContainer;
