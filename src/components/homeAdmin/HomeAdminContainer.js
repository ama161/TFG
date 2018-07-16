import { connect } from 'react-redux'
import HomeAdmin from "./HomeAdmin";
import { logout } from '../../actions/user';

const mapStateToProps = (state, ownProps) => {
    return {
        user: state['user'].toJS().user,
        language: state['language'].toJS().language,
        history: ownProps.history        
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => dispatch(logout(history)),
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeAdmin)
