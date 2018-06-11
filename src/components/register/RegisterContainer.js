import { connect } from 'react-redux'
import Register from "./Register";
import {loginAuth, register} from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state['user'].toJS()
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginAuth: () => {dispatch(loginAuth())},
        register: (email, password) => {dispatch(register(email, password))}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)
