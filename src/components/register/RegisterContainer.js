import { connect } from 'react-redux'
import Register from "./Register";
import {loginAuth, logout} from "../../actions/user";

const mapStateToProps = (state, ownProps) => {
    return {
        //user: state.get('user').toJS().user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginAuth: () => {dispatch(loginAuth())},
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Register)
