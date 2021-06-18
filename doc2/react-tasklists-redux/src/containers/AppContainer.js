import { connect } from "react-redux";
import App from "../components/App";
import { addTasklist } from "../actions/tasklists";

const mapStateToProps = (state, props) => {
    return {
        tasklists: [...state.tasklists],
    };
};

const mapDispatchToProps = (dispatch) => ({
    handleAddTaskList: () => dispatch(addTasklist()),
});

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);
export default AppContainer;
