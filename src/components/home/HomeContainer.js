import { connect } from 'react-redux'
import Home from "./Home";

const mapStateToProps = (state, ownProps) => {
    return {
        language: state['language'].toJS().language,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
