import { connect } from 'react-redux'
import Language from "./Language";
import {updateLanguage} from '../../actions/language';

const mapStateToProps = (state, ownProps) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        updateLanguage: (lan) => {dispatch(updateLanguage(lan))}
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Language)
