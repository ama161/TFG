import { connect } from 'react-redux'
import Login from "./Login";
import {logout, login} from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state['user'].toJS(),
        history: ownProps.history,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password, history) => {dispatch(login(email, password, history))},
        logout: () => {dispatch(logout())}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
