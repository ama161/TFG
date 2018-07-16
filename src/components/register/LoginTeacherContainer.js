import { connect } from 'react-redux'
import {singInWithEmailLink} from "../../actions/user";
import LoginTeacher from './LoginTeacher';

const mapStateToProps = (state, ownProps) => {
    return {
        history: ownProps.history,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        singInWithEmail: (href, email, password, history) => {dispatch(singInWithEmailLink(href, email, password, history))}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginTeacher)
