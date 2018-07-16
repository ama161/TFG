import { connect } from 'react-redux'
import HomeUser from "./HomeUser";
import {onAuthState} from "../../actions/user"

const mapStateToProps = (state, ownProps) => {
    return {
        user: state['user'].toJS().user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAuthState: () => {dispatch(onAuthState())}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeUser)
