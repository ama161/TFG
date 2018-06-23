import { connect } from 'react-redux'
import HomeUser from "./HomeUser";

const mapStateToProps = (state, ownProps) => {
    return {
        user: state['user'].toJS().user,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeUser)
