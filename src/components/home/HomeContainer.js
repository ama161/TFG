import { connect } from 'react-redux'
import Home from "./Home";
import {updateLanguage} from "../../actions/language";

const mapStateToProps = (state, ownProps) => {
    return {
        language: state['language'].toJS().language,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateLanguage: (language) => {dispatch(updateLanguage(language))}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
