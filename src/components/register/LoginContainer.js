import { connect } from 'react-redux'
import Login from "./Login";
import {logout, login} from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state['user'].toJS()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        login: (email, password) => {dispatch(login(email, password))},
        logout: () => {dispatch(logout())}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)
